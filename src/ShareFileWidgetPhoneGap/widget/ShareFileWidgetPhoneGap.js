define([
    "dojo/_base/declare",
    "ShareFileWidgetPhoneGap/lib/AbstractPhoneGapWidget/widget"
], function(declare, AbstractPhoneGapWidget) {
    "use strict";

    return declare("ShareFileWidgetPhoneGap.widget.ShareFileWidgetPhoneGap", [AbstractPhoneGapWidget], {

        // Overwriting Abstract widget
        phoneGapPluginName: "socialsharing",
        pluginNotFoundError: "Unable to detect Phonegap/Social sharing functionality.",

        _onClickAction: function() {
            logger.debug(this.id+'.shareFile: '+mx.appUrl+'/file?guid='+this._obj.getGuid() );
            window.plugins.socialsharing.share(null, this._obj.get('Name'), mx.appUrl+'file?guid='+this._obj.getGuid());
            //window.plugins.socialsharing.share(msg, subject, null, link);
        }
    });
});

// Compatibility with older mendix versions.
require(["ShareFileWidgetPhoneGap/widget/ShareFileWidgetPhoneGap"]);
