/////----------미사용

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "30vh",
}));

const images = [
  {
    url:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
    title: "Snorkeling",
    width: "30%",
  },

  {
    url:
      "https://images.unsplash.com/photo-1453747063559-36695c8771bd?auto=format&fit=crop&w=400&q=80",
    title: "Tour",
    width: "30%",
  },

  {
    url:
      "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80",
    title: "Reading",
    width: "30%",
  },
];

export default function ProductCategories() {
  return (
    <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
      {images.map((image) => (
        <ImageIconButton
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              backgroundImage: `url(${image.url})`,
            }}
          />
        </ImageIconButton>
      ))}
    </Box>
  );
}
