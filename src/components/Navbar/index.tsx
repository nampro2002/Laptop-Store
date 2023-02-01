import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Toolbar,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  createSearchParams,
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import CartModel from "../CartModel";
import PersonIcon from "@mui/icons-material/Person";
import { Logout } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useDispatch } from "react-redux";
import { logOutRemoveCart } from "../../redux/cartSlice";
import { Avatar } from "@mui/joy";
function Navbar() {
  const [navHighLight, setNavHighLight] = useState("");
  const [inputSearch, setInputSearch] = useState<string>("");
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  // console.log("navHighLight", navHighLight);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmitSearch = () => {
    if (inputSearch === "") {
      return;
    }
    const input = inputSearch;
    setInputSearch("");
    return navigate({
      pathname: "search",
      search: createSearchParams({
        input: input as string,
      }).toString(),
    });
  };
  const handleChange = (path: string) => {
    setNavHighLight(path);
  };
  const handleLogout = () => {
    handleChange("");
    dispatch(Logout());
    dispatch(logOutRemoveCart());
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "85%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        bgcolor: "#00000000",
        width: "80%",
        paddingY: "15px",
        // marginBottom: "2%",
        margin: "0 auto 2% auto",
      }}
    >
      {/* = position fixed */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box color="inherit">
          <Box
            width="130px"
            sx={{ cursor: "pointer", padding: "10px" }}
            onClick={() => {
              handleChange("");
              return navigate("/");
            }}
          >
            <img src="/imgs/others/logo-white.png" alt="" width="130px" />
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            height: "80%",
          }}
        >
          <TextField
            value={inputSearch}
            required
            id="outlined-required"
            placeholder="Search"
            fullWidth
            onChange={(e) => setInputSearch(e.target.value)}
            sx={{
              "& fieldset": { border: "none" },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
                borderRadius: "0",
              },

              // width: "80%",
            }}
          />
          <Button
            onClick={() => {
              handleSubmitSearch();
              handleChange("");
            }}
            sx={{
              color: "#000",
              paddingX: "20px",
            }}
          >
            Search
          </Button>
        </Box>
        <Stack
          direction="row"
          spacing="50px"
          fontSize="15px"
          alignItems="center"
        >
          <NavLink
            onClick={() => handleChange("")}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
            })}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => handleChange("")}
            to="/products"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#978D8D",
              textDecoration: "none",
            })}
          >
            PRODUCTS
          </NavLink>
          {/* <Button sx={{ color: "#978D8D" }} size="small">
            MEDIA
          </Button> */}
          <Stack
            direction="row"
            alignItems="center"
            sx={
              navHighLight === "/cart"
                ? { color: "#fff", cursor: "pointer" }
                : { color: "#978D8D", cursor: "pointer" }
            }
            onClick={handleOpen}
          >
            <ShoppingCartOutlinedIcon fontSize="small" />
          </Stack>
          {!userInfo.id && (
            <>
              <NavLink
                onClick={() => handleChange("")}
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#978D8D",
                  textDecoration: "none",
                })}
              >
                LOGIN
              </NavLink>
              <NavLink
                onClick={() => handleChange("")}
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#978D8D",
                  textDecoration: "none",
                })}
              >
                SIGN UP
              </NavLink>
            </>
          )}
          {userInfo.id && (
            <>
              <NavLink
                onClick={() => handleChange("")}
                to="/user/detail"
                style={({ isActive }) => ({
                  border: isActive ? "2px solid #fff" : "2px solid #000",
                  textDecoration: "none",
                  borderRadius: "50%",
                })}
              >
                <Avatar alt="Remy Sharp" src={userInfo.imgUrl} />
              </NavLink>

              <NavLink
                onClick={handleLogout}
                to="/"
                style={{
                  color: "#978D8D",
                  textDecoration: "none",
                }}
              >
                LOGOUT
              </NavLink>
            </>
          )}
        </Stack>
      </Stack>
      <Box        
        height="600px"
        width="100%"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: "-1",
          // borderBottomLeftRadius: "240px",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
          alt=""
          width="100%"
          height="100%"
          style={{ clipPath: "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 67% 89%, 23% 92%, 16% 82%, 0% 85%)" }}
        />
      </Box>      
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CartModel handleClose={handleClose} handleChange={handleChange} />
          </Box>
        </Modal>
      </div>
    </AppBar>
  );
}

export default Navbar;
