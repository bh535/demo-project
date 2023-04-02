import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

const Sidebar = ({selectedcategory, setSelectedCategory} ) => {
    

    return (
      <Stack  
       
        sx={{
            direction: { sx: 'row', md: 'column'},
            overflowY: 'auto',
            height: { sx: 'auto', md:'95%'},
            flexDirection: { md: 'coloumn'},
        
        }}
      >
        {categories.map((category) => (
            <button className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{background: category.name === selectedcategory && '#FC1503', color: 'white'}}
            key={category.name}
            
            >
                <span style={{color: category.name === selectedcategory ? 'white' : 'red', marginRight: '15px'}}
                >
                    {category.icon}
                    </span>
                <span style={{opacity: category.name === selectedcategory ? '1' : 0.8}}>
                    {category.name}
                    </span>
                
            </button>
        ))}

      </Stack>
    )
}

export default Sidebar