var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","dada.jpg", "dadi.jpg" , "Daddy.jpg", "Mom.jpg", "Sister.jpg", "Me.jpg"];
var names = ["Family Book","Grandfather - Babubhai Dalal", "Grandmother - Ela Dalal", "Father - Kartik Dalal", "Mother - Kinnari Dalal", "Sister - Manasvi Dalal", "Myself - Saumya Dalal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}