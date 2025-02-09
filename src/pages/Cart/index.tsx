import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartComponent from "../../components/CartComponent";
import { removeAllFromCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { formatPrice } from "../../Util/formatPrice";

function Cart() {
  const cartList = useAppSelector((state: RootState) => state.cart.cartList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleRemoveAll = () => {
    dispatch(removeAllFromCart(cartList));
  };

  const handleMoveTo = (path: string) => {
    return navigate(path);
  };
  return (
    <Box mb='200px'>
      <Typography
        variant="h2"
        fontWeight="900"
        color="white"
        align="center"
        mt="2%"
        mb="2%"
      >
        Cart
      </Typography>
      <Box bgcolor="#fff" p="35px" width="80%" margin="0 auto">
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
            }}
          >
            <Typography variant="h5" fontWeight="600" fontSize="25px" mb="20px">
              BẠN CÓ {cartLength} SẢN PHẨM TRONG GIỎ HÀNG
            </Typography>
            {cartPorductList.map((component, index) => (
              <CartComponent cartProduct={component} />
            ))}
          </Stack>
          <Box
            position="fixed"
            right="10%"
            width="250px"
            bgcolor="#fff"
            p="10px"
          >
            <Stack direction="column" spacing="20px">
              <Stack>
                <Typography variant="h5" fontWeight="600" fontSize="20px">
                  THÔNG TIN GIỎ HÀNG
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" fontWeight="600" fontSize="15px">
                  SỐ LƯỢNG SẢN PHẨM
                </Typography>
                <Typography variant="h6" fontWeight="600" fontSize="15px">
                  {cartLength}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="h6" fontWeight="600" fontSize="15px">
                  TỔNG
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
                onClick={() => handleMoveTo("/confirmcart")}
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
                XÁC NHẬN ĐƠN HÀNG
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
                onClick={() => handleMoveTo("/")}
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
    </Box>
  );
}

export default Cart;
