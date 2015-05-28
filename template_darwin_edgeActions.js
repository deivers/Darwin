/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${textshow}", "click", function(sym, e) {
         //sym.play(); // changed to autoplay
         
         sym.$("bodyText").show();
         sym.$("texthide").show();
         sym.$("textback").show();
         sym.$("containerwText").show();
         sym.$("backgroundwText").show();
         
         sym.$("textshow").hide();
         sym.$("container").hide();
         sym.$("background").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${texthide}", "click", function(sym, e) {
         
         sym.$("bodyText").hide();
         sym.$("textback").hide();
         sym.$("texthide").hide();
         sym.$("containerwText").hide();
         sym.$("backgroundwText").hide();
         
         sym.$("textshow").show();
         sym.$("container").show();
         sym.$("background").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("bodyText").hide();
         sym.$("texthide").hide();
         sym.$("textback").hide();
         sym.$("containerwText").hide();
         sym.$("backgroundwText").hide();
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${closewindowdarwin}", "click", function(sym, e) {
         window.close();

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "update", function(sym, e) {
         var textEl = sym.$("bodyText");
         var maxScroll = textEl[0].scrollHeight - textEl[0].clientHeight + 100; // 50 of this is for safety margin at the end
         var maxTime = sym.getDuration();
         //console.log(e.elapsed +"  "+ maxScroll +"  "+ maxTime);
         textEl.scrollTop(Math.floor((e.elapsed/maxTime) * maxScroll) - 50); // 50 for safety margin at beginning
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'texthide'
   (function(symbolName) {   
   
   })("texthide");
   //Edge symbol end:'texthide'

   //=========================================================
   
   //Edge symbol: 'textshow'
   (function(symbolName) {   
   
   })("textshow");
   //Edge symbol end:'textshow'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1024373");