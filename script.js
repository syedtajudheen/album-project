const album_url="https://jsonplaceholder.typicode.com/albums/";
const album_photo="/photos/";

$(document).ready(function(){
getalbumid();

 
//getphotos();
//getphotobyid();
});



	                                     function getalbumid() {
												          		$.getJSON( album_url, function(data) {
																					$.each(data.slice(0,12), function(key, value) {

																						var albumid = value.id;
																						//console.log(albumid);
																							getphotobyid(albumid);
																							 
																					
																					});
													          	});
										 }

							                	function getphotobyid(albumid){
												
												
                        
												var link =album_url + albumid + album_photo;
												
												
															 $.getJSON(link, function(data){
																$.each(data.slice(0,1),function(key, value) {
																	var albumphoto = value.thumbnailUrl;
																	//console.log(albumphoto);
																	// $('#albums').attr('<src="'+albumphoto+'">');
																	 
																	 $("#albums").append("<img   src='"+albumphoto+"'/>");
																});
															
															});
															
														
											}




											function getalbumid2() {
												          		$.getJSON( album_url, function(data) {
																					$.each(data.slice(0,12), function(key, value) {

																						var albumid2 = value.id;
																						
																							getphotos(albumid2);
																							 
																				
																					});
													          	});
										 }
										    
								
		
	function getphotos(albumid2) {
					                            // var albumid1= 1;
															var link2 =album_url + albumid2 + album_photo;
															 $.getJSON(link2, function(data){
																		$.each(data.slice(0,1),function(key, value) {
																									var photos = value.url;
																									console.log(photos);
																									$("#aaa").append("<img  src='"+photos+"'/>");
																										 Galleria.loadTheme('themes/classic/galleria.classic.min.js');
                                                                                                         Galleria.run('#gallery');
																									 
																								});
															
					                             });
					            	}





	// function myalbumid(albumid) {
								// 	for(i=o; i < albumid.length ;i++) {
								// 		console.log(i);
								// 	
							 
								// }