import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ICategory } from "../../types/types";
import CardVideo from "../CardVideo";

interface HeadeCarouselComponentProps {
  category: ICategory;
}

function HeadeCarouselComponent({ category }: HeadeCarouselComponentProps) {
  const handleLearnMore = () => {
    window.open(`${category.webUrl}`, "_blank");
  };
  return (
    <Box>
      <Stack
        direction="row"
        sx={{ color: "white" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        //   bgcolor="red"
        //   width='80%'
        //   margin='0 auto'
        ml="5%"
      >
        <Box width="450px">
          <Typography
            variant="h4"
            fontWeight="600"
            align="left"
            mb="50px"
            sx={{ textTransform: "uppercase" }}
          >
            {category.name}
            <Typography
              variant="body2"
              width="380px"
              align="left"
              alignSelf="center"
              mt="20px"
              fontSize="12px"
            >
              {category.description}
            </Typography>
          </Typography>
          <Button
            onClick={handleLearnMore}
            variant="outlined"
            sx={{
              paddingY: "9px",
              paddingX: "25px",
              borderRadius: "7px",
              color: "#fff",
              border: "2px solid #fff",
              "&:hover": {
                border: "2px solid #fff",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Box>
        <Box ml="4%">
          <CardVideo category={category} />
        </Box>
      </Stack>
    </Box>
  );
}

export default HeadeCarouselComponent;
