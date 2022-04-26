// put some js if you want
<script type="text/javascript">
<!--
 var imlocation = "hockey/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray (n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 image = new ImageArray(3)
 image[0] = 'hockey1.jpg'
 image[1] = 'hockey2.jpg'
 image[2] = 'hockey3.jpg'
 image[3] = 'hockey4.jpg'
 var rand = 60/image.length
 function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = Math.floor(image_number/rand)
 	return(image[image_number])
 }
 document.write("<img src='" + imlocation + randomimage()+ "'>");
//-->
</script>
