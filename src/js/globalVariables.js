var unitTesting=false;
var curlevel=0;
var solvedSections = [];
var curlevelTarget=null;
var hasUsedCheckpoint=false;
var levelEditorOpened=false;
var muted=0;
var runrulesonlevelstart_phase=false;
var ignoreNotJustPressedAction=true;

function doSetupTitleScreenLevelContinue(){
    try {
        if (storage_has(document.URL)) {
            if (storage_has(document.URL+'_checkpoint')){
                var backupStr = storage_get(document.URL+'_checkpoint');
                curlevelTarget = JSON.parse(backupStr);
                
                var arr = [];
                for(var p in Object.keys(curlevelTarget.dat)) {
                    arr[p] = curlevelTarget.dat[p];
                }
                curlevelTarget.dat = new Int32Array(arr);

            }
            curlevel = storage_get(document.URL); 
    		    if (localStorage[document.URL+"_sections"]!==undefined) {
                    solvedSections = JSON.parse(localStorage.getItem(document.URL + "_sections"));
                }
    		}
    } catch(ex) {
    }
}

doSetupTitleScreenLevelContinue();


var verbose_logging=false;
var throttle_movement=false;
var cache_console_messages=false;
var quittingTitleScreen=false;
var quittingMessageScreen=false;

var deltatime=17; // this gets updated every frame; see loop()
var timer=0;
var repeatinterval=150;
var autotick=0;
var autotickinterval=0;
var winning=false;
var againing=false;
var againinterval=150;
var norepeat_action=false;
var oldflickscreendat=[];//used for buffering old flickscreen/scrollscreen positions, in case player vanishes
var keybuffer = [];

var debugLevel = 0;
var showLayers = false;
var showLayerNo = 0;
var tweeninterval=0;
var tweentimer=0;
var isAnimating = false;    // true for any kind of animation/tweening that is not yet complete
var animateinterval=0;

var restarting=false;

var messageselected=false;

var textImages={};
var initLevel = {};
//     width: 5,
//     height: 5,
//     layerCount: 2,
//     dat: [
//     1, 3, 3, 1, 1, 2, 2, 3, 3, 1,
//     2, 1, 2, 2, 3, 3, 1, 1, 2, 2,
//     3, 2, 1, 3, 2, 1, 3, 2, 1, 3,
//     1, 3, 3, 1, 1, 2, 2, 3, 3, 1,
//     2, 1, 2, 2, 3, 3, 1, 1, 2, 2
//     ],
//     movementMask:[
//     1, 3, 3, 1, 1, 2, 2, 3, 3, 1,
//     2, 1, 2, 2, 3, 3, 1, 1, 2, 2,
//     3, 2, 1, 3, 2, 1, 3, 2, 1, 3,
//     1, 3, 3, 1, 1, 2, 2, 3, 3, 1,
//     2, 1, 2, 2, 3, 3, 1, 1, 2, 2
//     ],
//     rigidGroupIndexMask:[],//[indexgroupNumber, masked by layer arrays]
//     rigidMovementAppliedMask:[],//[indexgroupNumber, masked by layer arrays]
//     bannedGroup:[],
//     colCellContents:[],
//     rowCellContents:[],
//     colCellContents_Movements:[],
//     rowCellContents_Movements:[],
// };

var level = initLevel;
