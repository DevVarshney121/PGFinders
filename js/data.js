/* EDIT THIS FILE TO ADD/REMOVE PUBLIC LISTINGS.
   privateLocation is used for filtering only and is never printed on the page.
   Add at least 4 image URLs in gallery for each listing. */
(function(){
 const ids=["photo-1611892440504-42a792e24d32","photo-1616486338812-3dadae4b4ace","photo-1617104678098-de229db51175","photo-1618221195710-dd6b41faaea6","photo-1600210492486-724fe5c67fb0","photo-1600607687939-ce8a6c25118c","photo-1600566753086-00f18fb6b3ea","photo-1600585154340-be6161a56c2e","photo-1600607687920-4e2a09cf159d","photo-1600607687644-c7171b42498f","photo-1616486029423-aaa4789e8c9a","photo-1615874959474-d609969a20ed"];
 const img=(id)=>"https://images.unsplash.com/"+id+"?auto=format&fit=crop&w=1000&q=82";
 const photos=n=>Array.from({length:5},(_,i)=>img(ids[(n+i)%ids.length]));
 const p=(id,type,title,areaLabel,privateLocation,rent,roomType,amenities,status,n,opts={})=>({id,type,title,areaLabel,privateLocation,monthlyRent:rent,roomType,amenities,availability:status,featured:!!opts.featured,published:true,furnishing:opts.furnishing||"Furnished",genderPreference:opts.genderPreference||"Any",foodAvailable:opts.foodAvailable!==false,bhk:opts.bhk||"",shortDescription:opts.shortDescription||"Comfortable accommodation with essential facilities.",description:opts.description||"Explore this accommodation option in Greater Noida. Contact PGFinder for current availability and more details.",gallery:photos(n),createdAt:"2026-10-01",publicDeposit:opts.publicDeposit||null});
 window.PGF_DEFAULT_PROPERTIES=[
 p("pg-001","pg","Comfort Living PG","Beta 1","Knowledge Park II, near Pari Chowk",7000,"2/3/4 Seater",["Wi-Fi","Meals","AC","Attached Bathroom"],"Available",0,{featured:true}),
 p("pg-002","pg","Sunrise Girls PG","Alpha 1","Alpha 1, near main market",8000,"2/3 Seater",["Wi-Fi","Meals","AC","Laundry"],"Few Rooms Left",2,{featured:true,genderPreference:"Girls"}),
 p("pg-003","pg","Green Valley PG","Beta 1","Beta 1, college route",6500,"3/4 Seater",["Wi-Fi","Meals","Parking"],"Available",4,{featured:true}),
 p("pg-004","pg","Premium PG Stay","Alpha 2","Alpha 2, sector market",9000,"Single/Double",["Wi-Fi","AC","Meals","Security"],"Fully Occupied",6),
 p("pg-005","pg","Galaxy PG","Near Galgotias","Near Galgotias University",7500,"2/3 Seater",["Wi-Fi","Meals","Power Backup"],"Available",8),
 p("pg-006","pg","Urban Nest PG","Near Sharda","Near Sharda University",8500,"2/4 Seater",["Wi-Fi","Meals","AC","Housekeeping"],"Available",10),
 p("pg-007","pg","Student Home PG","Phi 2","Phi 2, local market",6000,"3/4 Seater",["Wi-Fi","Meals","Parking"],"Available",1),
 p("pg-008","pg","Elite Girls PG","Pari Chowk","Pari Chowk, transport",9000,"Single/Double",["Wi-Fi","AC","Meals","Laundry"],"Few Rooms Left",3,{genderPreference:"Girls"}),
 p("pg-009","pg","Royal PG","Ecotech 3","Ecotech 3, Greater Noida",7000,"2/3 Seater",["Wi-Fi","Meals","Security"],"Available",5),
 p("hostel-001","hostel","Sunrise Boys Hostel","Knowledge Park","Knowledge Park, colleges",6000,"4 Sharing",["Wi-Fi","Meals","Security","Study Room"],"Available",2,{featured:true,genderPreference:"Boys"}),
 p("hostel-002","hostel","Galaxy Girls Hostel","Alpha 1","Alpha 1, near market",7500,"3 Sharing",["Wi-Fi","Meals","AC","Laundry"],"Few Rooms Left",4,{genderPreference:"Girls"}),
 p("hostel-003","hostel","Comfort Stay Hostel","Beta 1","Beta 1, Greater Noida",5500,"4 Sharing",["Wi-Fi","Meals","Parking"],"Available",6,{featured:true}),
 p("hostel-004","hostel","Elite Boys Hostel","Alpha 2","Alpha 2, campus",8000,"3 Sharing",["Wi-Fi","AC","Meals","Security"],"Fully Occupied",8,{genderPreference:"Boys"}),
 p("hostel-005","hostel","Urban Girls Hostel","Near Galgotias","Near Galgotias University",6500,"4 Sharing",["Wi-Fi","Meals","Study Room"],"Available",10,{genderPreference:"Girls"}),
 p("hostel-006","hostel","Student Nest Hostel","Near Sharda","Near Sharda University",5000,"6 Sharing",["Wi-Fi","Meals","Parking"],"Available",0),
 p("flat-001","flat","Modern 2 BHK Flat","Beta 1","Beta 1, sector market",18000,"2 BHK",["Wi-Fi","AC","Parking","Kitchen"],"Available",1,{featured:true,bhk:"2 BHK",foodAvailable:false}),
 p("flat-002","flat","Bright 1 BHK Flat","Alpha 1","Alpha 1, Greater Noida",14000,"1 BHK",["Wi-Fi","AC","Kitchen"],"Available",3,{bhk:"1 BHK",foodAvailable:false}),
 p("flat-003","flat","Spacious 3 BHK Flat","Beta 2","Beta 2, Greater Noida",25000,"3 BHK",["Wi-Fi","AC","Parking","Security"],"Available",5,{featured:true,bhk:"3 BHK",foodAvailable:false}),
 p("flat-004","flat","Cozy 1 RK Flat","Alpha 2","Alpha 2, local shops",10000,"1 RK",["Wi-Fi","Kitchen","Power Backup"],"Rented",7,{bhk:"1 RK",foodAvailable:false}),
 p("flat-005","flat","Family Comfort Flat","Pari Chowk","Pari Chowk, Greater Noida",22000,"2 BHK",["Wi-Fi","AC","Parking","Security"],"Available",9,{bhk:"2 BHK",foodAvailable:false}),
 p("flat-006","flat","Sunlit 3 BHK Flat","Near Sharda","Near Sharda University",30000,"3 BHK",["Wi-Fi","AC","Kitchen","Parking"],"Available",11,{bhk:"3 BHK",foodAvailable:false})
 ];
 window.PGF_GALLERY=Array.from({length:16},(_,i)=>({src:img(ids[i%ids.length]),alt:"PG room or facility photo "+(i+1),caption:["Comfortable bedrooms","Modern living spaces","Warm interiors","Bright rooms"][i%4]}));
 window.PGF_FAQS=[
 {q:"How can I enquire about a property?",a:"Open a property and use WhatsApp enquiry, or send a message through Contact Us."},
 {q:"Can I see the exact property address publicly?",a:"No. Public cards show only a general area label such as Beta 1. Exact location details are kept private."},
 {q:"Do filters work together?",a:"Yes. Search, area, rent, room type, amenities and availability filters combine."},
 {q:"Can I add or remove property cards?",a:"Use the local Listing Manager or edit js/data.js. Local manager changes are saved only in this browser."},
 {q:"Will listing changes appear on every visitor's phone?",a:"No. This frontend-only version has no shared database. Update js/data.js and redeploy to publish shared changes."},
 {q:"How do I send a contact form message?",a:"Set your Formspree endpoint in js/config.js. Until configured, the form will explain that setup is needed."}
 ];
})();