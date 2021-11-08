
 
/*global jQuery */
(function($) {

  var rpcid = 1;

  $.jsonrpc = $.jsonrpc || function(opt_opts) {
    
    // create default options
    opt_opts = opt_opts || {};
    
    // custom ajax rulez
    var ajaxopts = {
      url: opt_opts.url,
      contentType: "application/json",
      dataType: "json",
      type: "POST",
      data: JSON.stringify({
        jsonrpc: "2.0",
        id: opt_opts.id || rpcid++,
        method: opt_opts.method || "",
        params: opt_opts.params || {}
      }),
      success: function(resp) {
        if (resp && !resp.error) {
          return opt_opts.success && opt_opts.success(resp.result);
        }
        if (resp && resp.error) {
          return opt_opts.fault && opt_opts.fault(resp.error.message, resp.error);
        }
        return opt_opts.fault && opt_opts.fault(resp);
      },
      error : function(xhr, status, error) {
        return opt_opts.error && opt_opts.error(xhr, status, error);
      }
    };

    // timeout required
    if (opt_opts.timeout) {
      ajaxopts.timeout = opt_opts.timeout;
    }

    $.ajax(ajaxopts);

    return $;
  };

}(jQuery));
