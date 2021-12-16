import { positions } from '@mui/system';
import * as React from 'react';
import { ProductCategories } from "..";

export default function Product() {
         return (<>
            <div align="center">
               <h1>Flight</h1>
               <ProductCategories/>
               <h1>Accomodation</h1>
               <ProductCategories/>
               <h1>Tourist Site</h1>
               <ProductCategories/>
               <h1>Activity</h1>
               <ProductCategories/>
               <h1>Shopping</h1>
               <ProductCategories/>
            </div>
         </>);
}