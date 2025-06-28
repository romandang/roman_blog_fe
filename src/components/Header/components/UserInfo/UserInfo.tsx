"use client";
import { LOGIN_URL } from "@/utils/routes";
import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface UserInfoProps {
  authorName: string;
  avatar: string;
}

const options = ["My profile", "Sign out"];

const UserInfo: React.FC<UserInfoProps> = ({ authorName, avatar }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [selectedIndex, setSelectedIndex] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    // setSelectedIndex(index);

    switch (index) {
      case 0:
        break;
      case 1:
        signOut({
          callbackUrl: LOGIN_URL,
        })
        break;

      default:
        break;
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        display="inline-block"
        sx={{
          marginLeft: 3,
        }}
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        role="presentation"
      >
        <Box display="flex" alignItems="center">
          <Typography sx={{ marginRight: 2 }}>{authorName}</Typography>
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{
              cursor: "pointer",
            }}
            onClick={handleClickListItem}
          />
        </Box>
      </Box>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
    // <Box
    //   display="inline-block"
    //   sx={{
    //     marginLeft: 3,
    //   }}
    // >
    //   <Box display="flex" alignItems="center">
    //     <Typography sx={{ marginRight: 2 }}>{authorName}</Typography>
    //     <Avatar alt="Remy Sharp" src={avatar} />
    //   </Box>
    // </Box>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
