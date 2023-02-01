import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "react-router-dom";
import ProductComponent from "../../components/ProductComponent";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { IProduct } from "../../types/types";
function SearchPage() {
  const [searchParam] = useSearchParams();
  const paramInput = searchParam.get("input");
  const paramCategory = searchParam.get("category");
  const productList = useAppSelector(
    (state: RootState) => state.products.productList
  );
  let searchOut: IProduct[] = [];
  if (paramInput) {
    searchOut = productList.filter((prod) =>
      prod.name.toLowerCase().includes(paramInput.toLowerCase())
    );
  }
  if (paramCategory) {
    searchOut = productList.filter((prod) =>
      prod.category.toLowerCase().includes(paramCategory.toLowerCase())
    );
  }
  return (
    <Box>
      {paramInput && (
        <Typography
          variant="h3"
          fontWeight="900"
          color="white"
          align="center"
          // mt="4%"
          mb="4%"
        >
          {`Kết quả tìm kiếm cho "${paramInput}"`}
        </Typography>
      )}
      {paramCategory && (
        <Typography
          variant="h3"
          fontWeight="900"
          color="white"
          align="center"
          // mt="4%"
          mb="4%"
        >
          {`Laptop "${paramCategory}"`}
        </Typography>
      )}

      <Box width="95%" margin="0 auto">
        <Box>
          {/* <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select> */}
        </Box>
        <Grid container md={12}>
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
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Thấp -{">"} Cao</MenuItem>
                    <MenuItem value={20}>Cao -{">"} Thấp </MenuItem>
                  </Select>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={10}>
            <Grid container md={12} justifyContent="flex-start">
              {searchOut.map((product) => (
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

export default SearchPage;
