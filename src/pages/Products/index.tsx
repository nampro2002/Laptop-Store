import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ProductComponent from "../../components/ProductComponent";
import { getAllCart } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllProduct, getTypicalProduct, random } from "../../redux/productSlice";
import { RootState } from "../../redux/store";
import { getAllUser } from "../../redux/userSlice";
function Products() {
  const [filters, setFilters] = useState({
    cateFilter: "",
    sortFilter: 0,
  });
  const listCategory = useAppSelector(
    (state: RootState) => state.products.category
  );
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );

  let listOut = productList;

  if (filters.cateFilter !== "" && filters.sortFilter === 0) {
    listOut = productList.filter((prod) =>
      prod.category.toLowerCase().includes(filters.cateFilter.toLowerCase())
    );
  }
  if (filters.sortFilter !== 0 && filters.cateFilter === "") {
    switch (filters.sortFilter) {
      case 10:
        console.log("vao day");
        listOut = productList.slice().sort((prod1, prod2) => {
          return prod1.price - prod2.price;
        });
        break;

      case 20:
        console.log("sort 20");
        listOut = productList.slice().sort((prod1, prod2) => {
          return prod2.price - prod1.price;
        });
        break;

      // case 30:
      //   listOut = productList.sort((prod1, prod2)=>{
      //     return prod1.price - prod2.price
      //   })
      //   break;

      // case 40:
      //   listOut = productList.sort((prod1, prod2)=>{
      //     return prod1.price - prod2.price
      //   })
      //   break;

      default:
        break;
    }
  }

  const handleFilterByCategory = (cate: string) => {
    setFilters({
      cateFilter: filters.cateFilter === cate ? "" : cate,
      sortFilter: 0,
    });
    // setFilters({
    //   ...filters,
    //   cateFilter: filters.cateFilter === "" ? cate : "",
    // });
  };
  const handleSort = (event: SelectChangeEvent<any>) => {
    setFilters({
      cateFilter: "",
      sortFilter:
        filters.sortFilter === Number.parseInt(event.target.value)
          ? 0
          : Number.parseInt(event.target.value),
    });
    // setFilters({
    //   ...filters,
    //   sortFilter: Number.parseInt(event.target.value),
    // });
  };



  // dispatch(random())
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("dispatch");
    dispatch(getAllProduct());
    const userInfo = JSON.parse(localStorage.getItem("user") || "{}");
    if (userInfo.id) {
      dispatch(getAllCart(userInfo.id));
    }
    // productList.map(prod=>{
    //   let randomPrice = Math.floor(Math.random() * (30000000 - 15000000) ) + 15000000
    //  dispatch(random({productId : prod.id, price : randomPrice}))
    // })
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="900"
        color="white"
        align="center"
        mt="2%"
        mb="6%"
      >
        All Products
      </Typography>

      <Box width="95%" margin="0 auto">
        <Box></Box>
        <Grid container>
          <Grid item md={2}>
            <Box width="90%">
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  border: "2px solid #eaeaea",
                }}
                //   component="nav"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Sort by
                  </ListSubheader>
                }
              >
                <ListItem>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    fullWidth
                    sx={{
                      borderRadius: "0",
                      fontSize: "13px",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #484850",
                        borderRadius: "0",
                      },
                    }}
                    defaultValue={0}
                    onChange={handleSort}
                    value={filters.sortFilter}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>
                      {"(Giá)"} Thấp -{">"} Cao
                    </MenuItem>
                    <MenuItem value={20}>
                      {"(Giá)"} Cao -{">"} Thấp{" "}
                    </MenuItem>
                    {/* <MenuItem value={30}>
                      {"(Rating)"} Cao -{">"} Thấp{" "}
                    </MenuItem>
                    <MenuItem value={40}>
                      {"(Rating)"} Thấp -{">"} Cao{" "}
                    </MenuItem> */}
                  </Select>
                </ListItem>
                <ListSubheader component="div" id="nested-list-subheader">
                  Category
                </ListSubheader>
                {listCategory.map((cate, index) => (
                  <ListItemButton
                    key={index}
                    onClick={() => handleFilterByCategory(cate.name)}
                    sx={{
                      bgcolor: cate.name === filters.cateFilter ? "#e3e3e3" : "#fff",
                    }}
                  >
                    <ListItemText primary={cate.name} />
                    <Checkbox
                      checked={cate.name === filters.cateFilter}
                      sx={{
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Grid container justifyContent="flex-start">
              {listOut?.map((product) => (
                <Grid item md={3} key={product.id}>
                  <ProductComponent product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Products;
