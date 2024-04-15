import { HttpResponse, http } from "msw";
import { faker } from "@faker-js/faker";
import { transformData } from "@/utils/useQuery";

type ChildType = {
  children: ChildType[] | null;
  name: string;
  code: string;
  registration_date: string;
  introducer_code: string;
};

type transformDataType = {
  name: string;
  code: string;
  registration_date: string;
  introducer_code: string;
  children: ChildType[];
};
const result = () => ({
  name: faker.person.fullName(),
  code: "00000" + faker.number.int({ min: 0, max: 10 }),
  registration_date: faker.date.anytime(),
  introducer_code: "00000" + faker.number.int({ min: 1, max: 10 }),
  l: [
    {
      name: faker.person.fullName(),
      code: "00000" + faker.number.int({ min: 1, max: 10 }),
      registration_date: faker.date.anytime(),
      introducer_code: "00000" + faker.number.int({ min: 1, max: 10 }),
    },
  ],
  r: [
    {
      name: faker.person.fullName(),
      code: "00000" + faker.number.int({ min: 1, max: 10 }),
      registration_date: faker.date.anytime(),
      introducer_code: "00000" + faker.number.int({ min: 1, max: 10 }),
    },
  ],
});

const generate10Users = (): transformDataType[] => {
  let users = [];
  for (let i = 0; i < 10; i++) {
    users.push(transformData(result()));
  }
  return users;
};

export const handlers = [
  http.get("http://localhost:3000/api/policyholders", () => {
    const data = generate10Users();
    const leftUser = data[0].children[0].code;
    const rightUser = data[0].children[1].code;
    return HttpResponse.json( ...data);
  }),
];
