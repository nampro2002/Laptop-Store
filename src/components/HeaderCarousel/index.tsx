import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import HeadeCarouselComponent from "../HeadeCarouselComponent";
import "./style.css";
function HeaderCarousel() {
  const listCategory = useAppSelector((state:RootState)=>state.products.category)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "abc",
    autoplay:true,
    autoplaySpeed:5000
  };
  return (
    <Box position="relative">
      {/* <Box
        bgcolor="#000"
        height="800px"
        width="100%"
        sx={{
          transform: "rotate(-7deg)",
          position: "absolute",
          top: "-320px",
          right: "-8%",
          zIndex: "-1",
          borderBottomLeftRadius: "240px",
        }}
      >
        bgcarosel
      </Box> */}
      <Box width="78%" margin="0 auto">
        <Slider {...settings}>
          {listCategory.map((category, index)=>(
          <HeadeCarouselComponent category={category} key={index}/>
          ))}        
        </Slider>
        <Box
          bgcolor="#000"
          width="4%"
          height="100%"
          position="absolute"
          sx={{
            top:'0%',
            left:'9%',
            transform: "rotate(-7deg)",
          }}        
        ></Box>
      </Box>
    </Box>
  );
}

export default HeaderCarousel;
