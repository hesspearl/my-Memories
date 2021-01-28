import React, { Dispatch, SetStateAction } from 'react'
import { GridList, GridListTile } from '@material-ui/core';
import { useStyle } from "./styles";

type Props={
    img:(arg:String)=>void
} 

function ImageList(props:Props) {
    const classes = useStyle();
    const {img} = props
    return (
        <div className={classes.imageList}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {itemData.map((tile) => (
           
                <GridListTile key={tile.img} cols={ 1}>
                    
             <img 
            onClick={()=>{img(tile.img)}} 
            className={classes.img} src={tile.img} alt={tile.title} /> 
        
          </GridListTile>
            

          
        ))}
      </GridList>
    </div>
    )
}

const itemData = [
    {
      img: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Butterfly',
    },
    {
      img: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Trees',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
export default ImageList
