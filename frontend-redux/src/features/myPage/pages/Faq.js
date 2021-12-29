import { Grid, Container } from "@mui/material";
import FAQcom from "../components/FAQcom";
import { MyLayout } from "features/common";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list } from "features/user/reducer/userSlice";
import { AppAppBar } from "features/adminCommon";
import moment from "moment";
import { v4 as uuid } from "uuid";
import {
  Box,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function FAQ(props) {
  return (
    <>
      <MyLayout>
      <Card>
        <h1 align="center">User List</h1>
        {/* <CardHeader title="User List" align="center" /> */}
        <Divider />
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableCell>
                <label>
                  이름:
                  <input type="text" id="name"  />
                  {/* value={name} onChange={handleChange} */}
                </label>
                  {/* <button onClick={()=>{dispatch(list(usersearch));}}>search</button> */}
              </TableCell>
            </TableHead>
          </Table>
          <div style={{ width: "95%", margin: "10px auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>질문 </TableCell>
                  <TableCell>응답</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {users.map((i, userId) => (
                  <TableRow key={userId}>
                    <TableCell>{i.userId}</TableCell>
                    <TableCell>{i.name}</TableCell>
                    <TableCell>{i.userName}</TableCell>
                    <TableCell>{i.birth}</TableCell>
                    <TableCell>{i.phoneNumber}</TableCell>
                    <TableCell>{i.regDate}</TableCell>
                   
                  </TableRow>
                ))} */}

                 {/* <TableCell>
                      {moment(users.createdAt).format("DD/MM/YYYY")}
                    </TableCell> */}
              </TableBody>
            </Table>
          </div>
        </Box>
      </Card>



        {/* ---------- */}
        <Box sx={{ width: "90%", height: "auto" }}>
          <Container>
            <Box sx={{ height: "10vh", width: "auto" }} />
            <Grid container spacing={2}>
              <Grid>
                <Divider />
              </Grid>
              <FAQcom />
            </Grid>
          </Container>
        </Box>
      </MyLayout>
    </>
  );
}





// -------------

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { list } from "features/user/reducer/userSlice";
// import { AppAppBar } from "features/adminCommon";
// import moment from "moment";
// import { v4 as uuid } from "uuid";
// import {
//   Box,
//   Card,
//   Divider,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@material-ui/core";


// const UserList = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.user.usersState);
//   const type = useSelector((state) => state.user.type); // 자바의 레포지토리의 타입
//   const keyword = useSelector((state) => state.user.keyword); // 레포지토리의 키
//   const [usersearch, setUsersearch] = useState({
//     name: "NONE",
//     birth: "NONE",
//     phone: "NONE"
//   });
//   const {name, birth, phone} = usersearch;

//   const page = 1;
//   const handleChange = (event) => {
//     console.log(event.target.name);
//     setUsersearch({ ...usersearch, [event.target.id]: event.target.value });
//     console.log(usersearch);
//   };


//   useEffect(() => {
//     dispatch(list(usersearch));
//   }, []);

//   console.log(JSON.stringify(users.userId));
//   console.log(type);


