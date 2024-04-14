import { result1, result3, result7, result8 } from "@/public/images";
import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: any;
}

export const images: CustomImage[] = [
  {
    src: '../public/images/result (1).png',
    original: '../public/images/result (1).png',
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: '../public/images/result (1).png',
    original: '../public/images/result (1).png',
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: '../public/images/result (1).png',
    original: '../public/images/result (1).png',
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: '../public/images/result (1).png',
    original: '../public/images/result (1).png',
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
 
];
