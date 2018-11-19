/**
 * history 1.2 - Plugin for jQuery
 *
 *
 * http://msdn.microsoft.com/en-us/library/cc288209(VS.85).aspx
 * 
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Depends:
 *   jquery.js
 *
 *  Copyright (c) 2008 Oleg Slobodskoi (ajaxsoft.de)
 */

;(function( jQuery, window, top ){

var instance;

jQuery.history = function( method, param ){
    if ( typeof method == 'function' ) {
        param = method;
        method = 'bind';
    }
    // bind and unbind methods need a callback function
    else if ( /bind|unbind/.test(method) && !jQuery.isFunction(param) ) return;
    
    if ( !instance ) {
        instance = new hist;
        instance.init();
    };

    method!='init' && instance[method](param);
};

function hist() {
    var self = this,
        jQueryiframe,
        jQuerywnd = jQuery(window),
        stop = false;
    
    self.value = top.location.hash.substr(1);
    
    this.init = function() {
        (function(){
                if ( stop ) return;
                top.location.hash.substr(1) !== self.value && changed(top.location.hash);
                setTimeout(arguments.callee, 50);
            })();
    };
    
    this.destroy = function() {
        // stop timeout
        stop = true;
        // remove iframe for IE6-7
        jQueryiframe && jQueryiframe.remove();
        // unbind all events
        jQuerywnd.unbind('hashchanged');
        // remove the reference to the instance
        instance = null;
    };
        
    this.bind = function( callback ) {
        jQuerywnd.bind('hashchanged', callback);    
    };
    
    this.unbind = function( callback ) {
        jQuerywnd.unbind('hashchanged', callback);
    };

    this.add = function( value ) {
        top.location.hash = value;
    };
    
    this.forward = function() {
        history.go(1);
    };

    this.back = function() {
        history.go(-1);
    };
    
    /**
     * Only for IE6-7
     * Check if iframe hash the same as document
     */
    function initIframe() {
        jQueryiframe = jQueryiframe || jQuery('<iframe style="display: none;" class="x-history-iframe"/>').appendTo(document.body);
        // if document is not ready, access to the contentWindow of the iframe is not immediately available
        try { jQueryiframe[0].contentWindow; } catch(e){
            setTimeout(arguments.callee, 50);
            return;    
        };
                
        var iHash = iDoc().location.hash,
            hash = top.location.hash,
            iHashNew, hashNew;

        (function(){
            if ( stop ) return;
            iHashNew = iDoc().location.hash;
            hashNew = top.location.hash;
            
            // changed using navigation buttons
            if (iHashNew !== iHash) {
                iHash = iHashNew;
                hash = iHash;
                top.location.hash = changed(iHash);
            // changed using link or add method
            } else if (hashNew !== hash) {
                hash = hashNew;
                updateIFrame(hash);
            };
            setTimeout(arguments.callee, 50);
        })();
        
        
        // get the document of the iframe
        function iDoc() {
            return jQueryiframe[0].contentWindow.document;
        };
        
        // save value to the iframe
        function updateIFrame(value) {
            iDoc().open();
            iDoc().close();
            iDoc().location.hash = value;
        };
    };    
    
    /**
     * hash was changed - do something
     * @param {String} value - '#value'
     */     
    function changed( value ) {
        self.value = value.substr(1);
        // call all callbacks
        jQuery.event.trigger('hashchanged', [self]);
        return self.value;
    };

};

})( jQuery, window, top );        
