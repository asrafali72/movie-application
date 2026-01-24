import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating, Box } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card 
      sx={{ 
        width: '233px',       
        height: '440px',      
        display: 'flex', 
        flexDirection: 'column',
        margin: 'auto',       
        position: 'relative'
      }}
    >
      <Box sx={{ width: '100%', height: '320px', backgroundColor: '#000' }}>
        <CardMedia
          component="img"
          image={movie.posterUrl || "https://via.placeholder.com/233x320?text=No+Poster"}
          alt={movie.title}
          sx={{ 
            width: '100%',
            height: '100%',       
            objectFit: 'cover',   
            objectPosition: 'center'
          }}
          onError={(e) => {
             e.target.onerror = null; 
             e.target.src="https://via.placeholder.com/233x320?text=No+Poster"
          }}
        />
      </Box>
      
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'flex-start', 
          padding: '12px',
          gap: '10px' 
        }}
      >
        
        <Typography 
          gutterBottom 
          variant="subtitle1" 
          component="div" 
          title={movie.title}
          sx={{ 
            fontWeight: 'bold', 
            lineHeight: 1.2,
            maxHeight: '2.4em', 
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {movie.title}
        </Typography>
        
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <Rating value={movie.rating || 0} precision={0.1} readOnly size="small" />
            <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
              ({movie.rating})
            </Typography>
          </Box>

          <Typography variant="caption" display="block" color="text.secondary">
            Released: {new Date(movie.releaseDate).toLocaleDateString()}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            Duration: {movie.duration} min
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

export default MovieCard;