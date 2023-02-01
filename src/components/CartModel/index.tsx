import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeAllFromCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { formatPrice } from "../../Util/formatPrice";
import CartModelComponent from "../CartModelComponent";

interface CartModelProps {
  handleClose: () => void;
  handleChange: (path: string) => void;
}

function CartModel({ handleClose, handleChange }: CartModelProps) {
  const cartList = useAppSelector((state: RootState) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const cartLength = cartList.length;
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );

  let cartPorductList = cartList.map((cart) => {
    const product = productList.find((prod) => prod.id === cart.prodId);
    if (product) {
      return {
        id: cart.id,
        prodId: cart.prodId,
        quantity: cart.quantity,
        name: product.name,
        price: product.price,
        imgUrl: product.imageUrl1,
      };
    } else {
      return {
        id: "0",
        prodId: "0",
        quantity: 1,
        name: "abc",
        price: 0,
        imgUrl: "none",
      };
    }
  });

  const totalAll = cartPorductList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const handleCloseModal = () => {
    handleClose();
  };
  const handleRemoveAll = () => {
    dispatch(removeAllFromCart(cartList));
  };
  const navigate = useNavigate();
  const handleMoveTo = (path: string) => {
    return navigate(path);
  };
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb="1%"
      >
        <Typography variant="h5" fontWeight="600">
          Bạn có {cartLength} sản phẩm trong giỏ hàng
        </Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon fontSize="large" sx={{ color: "#000" }} />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        // justifyContent="space-between"
      >
        <Stack
          paddingRight="5px"
          direction="column"
          spacing="10px"
          sx={{
            width: "calc(100% - 300px)",
            height: "600px",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          {cartPorductList.map((component, index) => (
            <CartModelComponent cartProduct={component} key={index} />
          ))}
        </Stack>
        <Box flexBasis="300px" ml="50px">
          <Stack direction="column" spacing="10px">
            <Stack>
              <Typography variant="h5" fontWeight="600" fontSize="20px">
                Thông tin giỏ hàng
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" fontWeight="600" fontSize="15px">
                Số lượng sản phẩm
              </Typography>
              <Typography variant="h6" fontWeight="600" fontSize="15px">
                {cartLength}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" fontWeight="600" fontSize="15px">
                Tổng
              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                fontSize="20px"
                color="red"
              >
                {formatPrice(totalAll)}
              </Typography>
            </Stack>

            <Button
              onClick={() => {
                handleCloseModal();
                handleChange('/cart')
                handleMoveTo("/cart");
              }}
              sx={{
                paddingY: "10px",
                borderRadius: "0",
                color: "#fff",
                bgcolor: "#000",
                "&:hover": {
                  bgcolor: "#000",
                },
              }}
            >
              ĐẾN GIỎ HÀNG
            </Button>
            <Button
              onClick={handleRemoveAll}
              sx={{
                paddingY: "10px",
                borderRadius: "0",
                color: "#fff",
                bgcolor: "red",
                "&:hover": {
                  bgcolor: "red",
                },
              }}
            >
              XÓA GIỎ HÀNG
            </Button>
            <Button
              onClick={() => {
                handleCloseModal();
                handleMoveTo("/");
              }}
              variant="outlined"
              sx={{
                border: "1px solid #000",
                paddingY: "10px",
                borderRadius: "0",
                color: "#000",
                bgcolor: "#fff",
                "&:hover": {
                  bgcolor: "#fff",
                },
              }}
            >
              VỀ TRANG CHỦ
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default CartModel;
