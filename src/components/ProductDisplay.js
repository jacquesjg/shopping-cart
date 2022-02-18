import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const ProductDisplay = (props) => {
  const { product: { id, title, brand, price, description, image } } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        action={
          <Typography>{price / 100}</Typography>
        }
        title={title}
        subheader={brand}
      />


      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="Gibson Les Paul Special"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button>Add to Cart</Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
}

export default ProductDisplay;