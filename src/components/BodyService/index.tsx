import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import Stack from "@mui/material/Stack";

function BodyService() {
  return (
    <Stack direction="column" spacing="30px" alignItems="center">
      <Stack
        direction="row"
        bgcolor="#E3E3E3"
        width="85%"
        margin="0 auto"
        justifyContent="space-between"
        p="10px"
        sx={{ borderTopRightRadius: "25px", borderBottomRightRadius:'25px' }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml="7%"
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Sửa chữa bảo dưỡng
          </Typography>
          <Typography
            variant="body2"
            width="500px"
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box>
          <img src="/imgs/service/repair.png" alt="" width="500px" />
        </Box>
      </Stack>
      <Stack
        direction="row-reverse"
        bgcolor="#E3E3E3"
        width="85%"
        margin="0 auto"
        justifyContent="space-between"
        p="10px"
        sx={{ borderTopLeftRadius: "25px", borderBottomLeftRadius:'25px' }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          mr="7%"
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Tư vấn sản phẩm
          </Typography>
          <Typography
            variant="body2"
            width="500px"
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box>
          <img src="/imgs/service/advice.png" alt="" width="500px" />
        </Box>
      </Stack>
      <Stack
        direction="row"
        bgcolor="#E3E3E3"
        width="85%"
        margin="0 auto"
        justifyContent="space-between"
        p="10px"
        sx={{ borderTopRightRadius: "25px", borderBottomRightRadius:'25px' }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          ml="7%"
          spacing="20px"
        >
          <Typography variant="h5" fontWeight="500" align="left">
            Giao hàng
          </Typography>
          <Typography
            variant="body2"
            width="500px"
            align="left"
            alignSelf="center"
            mt="10px"
            fontSize="16px"
          >
            Our sales support team will come & measure your property in order to
            ensure accuracy in design and help you calculate how many tiles you
            need. Please call our toll free number 800 122 22 20 to arrange a
            visit, or visit one of our Showrooms.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "2px solid #000",
              paddingY: "7px",
              paddingX: "20px",
              // borderRadius: "7px",
              "&:hover": {
                border: "2px solid #000",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box>
          <img
            src="/imgs/service/delivery.jpg"
            alt=""
            width="500px"
            style={{ borderRadius: "20px" }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default BodyService;
