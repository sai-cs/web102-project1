import './App.css';
import React from "react";
import Dishes from "./components/Dishes";

const App = () => {

  return (
    <div className="App">

      <h1>Ramadan Dishes</h1>

      <h2>Our top recommendations & recipes!</h2>

      <div className="layout">

      <Dishes imageUrl={"https://www.thechunkychef.com/wp-content/uploads/2021/03/Chicken-Shawarma-recipe-card-500x500.jpg"} 
      foodName={"Chicken Shawarma"} 
      recipeUrl={"https://damndelicious.net/2023/06/23/easy-chicken-shawarma"}/>

      <Dishes imageUrl={"https://www.kitchensanctuary.com/wp-content/uploads/2023/10/Samosa-square-FS.jpg"} 
      foodName={"Samosa"} 
      recipeUrl={"https://www.indianhealthyrecipes.com/samosa-recipe-make-samosa/"}/>

      <Dishes imageUrl={"https://www.thedeliciouscrescent.com/wp-content/uploads/2020/08/Haleem-6.jpg"} 
      foodName={"Haleem"} 
      recipeUrl={"https://www.teaforturmeric.com/easy-pakistani-haleem-recipe-instant-pot/"}/>
      
      <Dishes imageUrl={"https://assets.epicurious.com/photos/54b301623edeef84363b6c8a/1:1/w_2560%2Cc_limit/358559_coconut-pistachio-baklava_1x1.jpg"} 
      foodName={"Baklava"} 
      recipeUrl={"https://natashaskitchen.com/baklava-recipe/"}/>

      <Dishes imageUrl={"https://joyfoodsunshine.com/wp-content/uploads/2022/06/chicken-kebabs-recipe-1.jpg"} 
      foodName={"Shish Kebab"} 
      recipeUrl={"https://joyfoodsunshine.com/chicken-kebabs/"}/>

      <Dishes imageUrl={"https://silkroadrecipes.com/wp-content/uploads/2021/12/Onion-Pakora-Indian-Fritters-square.jpg"} 
      foodName={"Pakora"} 
      recipeUrl={"https://www.indianhealthyrecipes.com/pakora-recipe-vegetable-pakora-pakoda/"}/>

      <Dishes imageUrl={"https://feelgoodfoodie.net/wp-content/uploads/2023/09/Fattoush-Salad-TIMG.jpg"} 
      foodName={"Fattoush Salad"} 
      recipeUrl={"https://feelgoodfoodie.net/recipe/lebanese-fattoush-salad/"}/>
      
      <Dishes imageUrl={"https://recipes.net/wp-content/uploads/2023/05/air-fryer-chicken-biryani-recipe_6968eb6ab4a5ae22d136dab86c9ea8af.jpeg"} 
      foodName={"Biryani"} 
      recipeUrl={"https://www.teaforturmeric.com/chicken-biryani/"}/>

      <Dishes imageUrl={"https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer-500x500.jpg"} 
      foodName={"Kheer"} 
      recipeUrl={"https://www.vegrecipesofindia.com/rice-kheer-recipe-chawal-ki-kheer/"}/>

      <Dishes imageUrl={"https://falasteenifoodie.com/wp-content/uploads/2023/01/delicious-Arayes-1.jpg"} 
      foodName={"Palestinian Arayes"} 
      recipeUrl={"https://falasteenifoodie.com/meat-stuffed-pitas-palestinian-arayes/"}/>

      </div>
      
    </div>
  )
}

export default App