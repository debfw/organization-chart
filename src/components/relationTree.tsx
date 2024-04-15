"use client";

import { useGetMember } from "@/utils/useQuery";
import ViewListIcon from "@mui/icons-material/ViewList";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Tree, { Point } from "react-d3-tree";
import { useEffect, useRef, useState } from "react";

export default function RelationTree() {

  const { data, isSuccess } = useGetMember();
  const ref = useRef<HTMLDivElement>(null);
  // const rect = ref?.current?.getBoundingClientRect();
  const translate = (): Point => {
    let [x, y] = [0, 0];
    if (ref.current) {
      y = 100;
      x = ref.current.clientWidth / 2;
    }
    return { x, y };
  };

  const renderForeignObjectNode = ({
    nodeDatum,
    foreignObjectProps,
    handleNodeClick,
  }: {
    nodeDatum: any;
    foreignObjectProps: any;
    handleNodeClick: any;
  }) => (
    <g>
      {nodeDatum.name && (
        <circle
          className="rd3t-node"
          r={15}
          onClick={() => handleNodeClick(nodeDatum)}
        />
      )}
      {/* `foreignObject` requires width & height to be explicitly set. */}
      {nodeDatum.name && (
        <foreignObject {...foreignObjectProps}>
          <div
            style={{
              border: "2px solid #2568DD",
              borderRadius: "5px",
              backgroundColor: "#407CE5",
            }}
          >
            <h3 style={{ textAlign: "center", color: "white" }}>
              <button> {nodeDatum.code}</button>
            </h3>
            <h3 style={{ textAlign: "center", color: "white" }}>
              {nodeDatum.name}
            </h3>
            {nodeDatum.attributes?.department && (
              <p style={{ marginLeft: "10px", color: "white" }}>
                Department: {nodeDatum.attributes.department}
              </p>
            )}
          </div>
        </foreignObject>
      )}
    </g>
  );
  const handleNodeClick = () => {
    // your custom node click action
  };

  const foreignObjectProps = { width: 200, height: 200, x: 20, y: 5 };
  return (
    <div className="flex min-h-screen flex-col align-center justify-start bg-white align-items: center;">
      <header className="flex flex-col w-10/12 m-10">
        <div className="flex flex-row mb-3">
          <ViewListIcon className="mr-5 ml-5" />
          <div className="text-2xl">關係圖</div>
        </div>
      </header>

      <div
        id="treeWrapper"
        ref={ref}
        style={{
          width: "100vw",
          height: "100vh",

          // pointerEvents: "none",
        }}
      >
        {data && (
          <Tree
            data={data}
            orientation="vertical"
            pathFunc="step"
            draggable={false}
            zoomable={false}
            translate={translate()}
            nodeSize={{ x: 250, y: 200 }}
            renderCustomNodeElement={(rd3tProps) =>
              renderForeignObjectNode({
                ...rd3tProps,
                foreignObjectProps,
                handleNodeClick,
              })
            }
          />
        )}
      </div>
    </div>
  );
}
