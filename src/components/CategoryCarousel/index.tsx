import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { ICategory } from "../../types/types";
import CategoryComponent from "../CategoryComponent";
function CategoryCarousel() {
  const listCategory = useAppSelector((state:RootState)=>state.products.category)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:false,
    dotsClass:'abc',
    autoplay:true,
    autoplaySpeed:3000
  };
  return (
    <Box bgcolor="#000" padding='20px'>
      <Typography
        variant="h4"
        fontWeight="600"
        align="center"
        mb="60px"
        color="white"
      >
        Category
      </Typography>
     <Box sx={{cursor:'pointer'}}>
     <Slider {...settings} >
     {listCategory.map((cate:ICategory, index:number)=>(
      <CategoryComponent key={index} category={cate.name}/>
     ))}
      </Slider>
     </Box>
    </Box>
  );
}

export default CategoryCarousel;
