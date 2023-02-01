import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ICartProduct } from "../../types/types";
import { formatPrice } from "../../Util/formatPrice";

interface CartModelComponentProps {
  cartProduct: ICartProduct;
}

function CartModelComponent({ cartProduct }: CartModelComponentProps) {
  const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = userInfo.id;
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const dispatch = useAppDispatch();
  const handleSetQuantity = (value: string) => {
    if (value === "up") {
      setQuantity((quantity) => quantity + 1);
      dispatch(
        increaseQuantity({
          id: cartProduct.id,
          prodId: cartProduct.prodId,
          userId,
          quantity: cartProduct.quantity + 1,
        })
      );
    } else if (value === "down") {
      if (quantity === 1) {
        return;
      }
      dispatch(
        decreaseQuantity({
          id: cartProduct.id,
          prodId: cartProduct.prodId,
          userId,
          quantity: cartProduct.quantity - 1,
        })
      );
      setQuantity((quantity) => quantity - 1);
    } else {
      return;
    }
  };
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };
  const total = cartProduct.price * cartProduct.quantity;
  return (
    <Box py="10px" sx={{ border: "1px solid #b6b4b4" }}>
      <Stack direction="row">
        <img
          src={cartProduct.imgUrl}
          alt=""
          width="100px"
          style={
            {
              // border: "1px solid #000",
            }
          }
        />
        <Stack
          direction="row"
          ml="30px"
          width="calc(100% - 100px)"
          alignItems="center"
        >
          <Box width="calc(100% - 80px)">
            <Typography variant="h5">{cartProduct.name}</Typography>
            <Typography variant="h6" color="red" fontWeight="500">
              {formatPrice(total)} 
            </Typography>
          </Box>
          <Stack direction="row" alignItems="center">
            <Stack direction="row" mr="20px">
              <Typography
                onClick={(e) => handleSetQuantity("down")}
                width="35px"
                height="35px"
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                sx={{ cursor: "pointer" }}
              >
                -
              </Typography>
              <input
                type="number"
                className="input-quantity"
                style={{
                  border: "none",
                  width: "30px",
                  textAlign: "center",
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
              />
              <Typography
                onClick={() => handleSetQuantity("up")}
                width="35px"
                height="35px"
                bgcolor="#e3e3e3"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                sx={{ cursor: "pointer" }}
              >
                +
              </Typography>
            </Stack>
            <IconButton onClick={() => handleRemoveFromCart(cartProduct.id)}>
              <DeleteOutlineIcon fontSize="medium" sx={{ color: "red" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default CartModelComponent;
