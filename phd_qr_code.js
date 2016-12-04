videoRecord.record(client, {
  videoFolder: videoFolder,
  name: `video-${fligthName}.m4v`
});
client.on('navdata', function(data) {
       var time = Date.now();
       var navdatatxt = JSON.stringify(data);
       var csvRowHistory = `${time},${navdatatxt}\n`;
       navdataHistoryStream.write(csvRowHistory);
});
 if( data.magneto ) {
   var csvRowMagneto =
   `${time},${data.magneto.mx},${data.magneto.my},${data.magneto.mz},${data.magneto.raw.x},${dat a.magneto.raw.y},${data.magneto.raw.z}\n`;
   navdataMagnetoStream.write(csvRowMagneto);
 };
 var codes = new QRAR(client);
 var lastExecutedCode = '';
 var isFirstQRDetected = true;
 var isReady = true;
 function iterateArrayPausable(array, cb) {
     let i = 0;
     function loop () {
       let value = array[i];
       let wait = _.startsWith(value, 'wait') ? parseInt(value.replace('wait(', '').replace(')', '')) : 0;
       let operation = _.startsWith(value, 'wait') ? ()=>{} : console.log;
       setTimeout(function () {
         operation.call(null, value);
         i++;
         if (i < array.length) {
           loop();
         } else {
           if( cb)
         _.defer(cb.bind(null));
       }
     }, wait);
   }
   loop();
 }

 codes.on('qrcode', function (code) {
   if( isReady ) {
     //console.log("Code:", code);
     isReady = false;
     // Check if it is a configurable code
     if( ! commands.isDefaultCode(code) ) {
       // This is a configurable code and is 1 char repeated N times
       // It separates the code char by char, groups by equals char, sorts them and take the char with most occurrences
       code = _.chain(code)
       .words(/./g)
       .groupBy()
       .sortBy((el) => el.length * -1) // Descending
       .first().first()
       .value();
     }

     if( lastExecutedCode === code ) {
       isReady = true;
       return;
     }

     if( ! commands.isValidCode(code) ) {
       isReady = true;
       return;
     }
