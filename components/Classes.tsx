import React from "react";
import Button from "@mui/material/Button";

const classes = [
  {
    name: "Honors English 1",
  },
];

function ClassData({ data }) {
  return (
    <Button sx={{ ml: 1 }}>
      {data.name}
      <span className="material-symbols-outlined" style={{ marginLeft: "8px" }}>
        expand_more
      </span>
    </Button>
  );
}

export function Classes() {
  return (
    <>
      {classes.map((data: any, key) => (
        <ClassData data={data} key={key.toString()} />
      ))}
    </>
  );
}
