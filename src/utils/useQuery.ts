"use client";
import { useQuery } from "@tanstack/react-query";

export const transformData = (data: any) => {
  const { l: left, r: right, ...rest } = data;
  const children = [
    ...(left ? left.map(transformData) : []),
    ...(right ? right.map(transformData) : []),
  ];
  return {
    children: children.length > 0 ? children : null,
    ...rest,
  };
};

export function useGetMember() {
  return useQuery({
    queryKey: ["search"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/policyholders");
      const result = await res.json();
      const data = transformData(result);
      return data;
    },
  });
}

export function useGetTopMember(code: string) {
  return useQuery({
    queryKey: ["search", code],
    queryFn: () =>
      fetch(`http://localhost:3000/api/policyholders/${code}/top`).then((res) =>
        res.json()
      ),
  });
}
