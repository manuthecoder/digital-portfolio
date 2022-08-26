import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { green } from "@mui/material/colors";
import Link from "next/link";

const links = [
  {
    name: "About",
    options: [
      { name: "Personal bio", link: "/personal-bio" },
      { name: "Academic history", link: "/academic-history" },
      { name: "Interests & activities", link: "/interests-and-activities" },
    ],
  },
];

function ClassData({ data }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button sx={{ ml: 1 }} onClick={handleClick}>
        {data.name}
        <span
          className="material-symbols-outlined"
          style={{ marginLeft: "8px" }}
        >
          expand_more
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          onMouseLeave: handleClose,
          sx: {
            border: "2px solid" + green["A700"],
            background: "#000",
            color: green["A400"],
            mt: 1,
            minWidth: "200px",
          },
        }}
      >
        {data.options.map((option, key) => (
          <Link href={option.link} key={key.toString()}>
            <MenuItem
              sx={{ "&:hover": { background: "limegreen", color: "#000" } }}
              onClick={handleClose}
              key={key.toString()}
            >
              {option.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
}

export function About() {
  return (
    <>
      {links.map((data: any, key) => (
        <ClassData data={data} key={key.toString()} />
      ))}
    </>
  );
}
