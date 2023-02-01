import { Stack } from "@mui/joy";
import { Box, Grid, Typography, Button } from "@mui/material";

function BodyVideo() {
  return (
    <Box bgcolor="#fff">
      <Box width="80%" margin="0 auto" paddingY="80px">
        <Stack direction="row" justifyContent="space-between" alignItems='center'>
          <Stack>
            <Box>
              <video width="400px" controls>
                <source src="imgs/others/sangtran.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </Box>
          </Stack>
          <Stack direction="column" spacing="20px" alignItems='flex-start'>
            <Typography variant="h4" fontWeight="600" align="left">
              Why Choose Us?
            </Typography>
            <Typography
              variant="body2"
              width="565px"
              align="left"
              alignSelf="center"
              fontSize="12px"
            >
              Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis
              tempor consequat turpis. Aenean curae elementum vestibulum dapibus
              vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl
              taciti si platea dui. Euismod malesuada facilisis duis lobortis
              aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </Typography>
            <Typography
              variant="body2"
              width="560px"
              align="left"
              alignSelf="center"
              fontSize="12px"
            >
              Nisl taciti si platea dui. Euismod malesuada facilisis duis
              lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie
              pharetra. Sodales pulvinar non habitant.
            </Typography>
            <Typography style={{ fontSize: "12px", fontWeight: "400" }}>
              <li>SUSTAINABLY SOURCED</li>
              <li>EASY TO RECYCLE</li>
              <li>IMPROVED HOME RESALE VALUE</li>
              <li>A SMART WAY TO LEED CERTIFICATION</li>
            </Typography>
            <Button
              variant="contained"
              sx={{
                paddingY: "9px",
                paddingX: "30px",
                borderRadius: "7px",
                bgcolor: "#000",
                marginTop: "30px",
                "&:hover": {
                  bgcolor: "#E3E3E3",
                  color: "#000",
                },
              }}
            >
              LEARN MORE
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default BodyVideo;
