Bootloader.markResourcesAsLoaded(["js\/common.js.pkg.php","js\/lib\/event\/link_controller.js","js\/flyout_menu.js","js\/canvas.js","js\/api\/confirmation.js","js\/feedform.js","js\/lib\/util\/quickling.js","js\/attachments.js","js\/fbml.js","js\/friend_suggester.js","js\/lib\/ui\/typeaheadpro\/typeahead_source.js","js\/lib\/ui\/drag.js","js\/lib\/ui\/sort.js","js\/edit_app_settings.js","js\/page\/editapps.js","js\/scrollarea.js","js\/lib\/ui\/typeaheadpro\/search_typeaheadpro.js","js\/lib\/ui\/typeaheadpro\/sources\/static_source.js","js\/lib\/ui\/typeaheadpro\/sources\/search_friend_source.js","js\/lib\/net\/livemessage.js"]);

onloadRegister(function() {try { if (!ua.ie()){so_sound_player = new SWFObject("/swf/SoundPlayer.swf", "so_sound_player", "1", "1", "5.0.0", "#ffffff");
so_sound_player.addParam("allowscriptaccess", "always");
so_sound_player.addParam("wmode", "transparent");
so_sound_player.addVariable("string_table", "http://static.ak.fbcdn.net/js_strings.php/t84465/en_US");
so_sound_player.addVariable("swf_id", "so_sound_player");
so_sound_player.fallback_html = " ";
so_sound_player.write("sound_player_holder");}if (deconcept.SWFObjectUtil.getPlayerVersion().major == 0) { hide("chat_setting_sound"); hide("sound_player_holder") } } catch (swfex) { }});
onloadRegister(function() {placeholderSetup("buddy_list_typeahead_input");});
onloadRegister(function() {window.edit_status_visible = window.status_blur = false;});
onloadRegister(function() {window.presenceCookieManager = new fbCookieManager(2);});
onloadRegister(function() {window.channelManager = new fbChannelManager("505421674");});
onloadRegister(function() {window.presence = new fbPresence("505421674", "Scott Raymond", "Scott", 1216310168000, 0, {"UPDATE_GRANULARITY":20,"BUDDY_BASE_TIME":40,"BUDDY_MAX_TIME":900,"BUDDY_COST_NEVER_SENT_MESSAGE":900,"BUDDY_COST_NO_LIST_CHANGE":30,"BUDDY_COST_NO_CHAT_TABS":30,"BUDDY_COST_CHAT_ACTIVITY":180,"BUDDY_COST_VIEW_ACTIVITY":180,"BUDDY_COST_PAGE_ACTIVITY":180,"BUDDY_MAX_ACTIVITY_MINS":180,"BUDDY_MAX_AVAIL_COOKIE":20,"BUDDY_VIEW_FETCH_WINDOW":120,"NOTIFICATIONS_PIGGYBACK_PERCENTAGE":25}, "http:\/\/www.new.facebook.com\/presence\/popout.php", "http:\/\/www.new.facebook.com\/login.php");});
onloadRegister(function() {window.presenceUpdater = new fbPresenceUpdater();});
onloadRegister(function() {window.presenceNotifications = new fbNotifications(5, 0, 1216310168000, {"2431403991":"PackRat","2356318349":"Friends"}, 1216266326, 1216266326);});
onloadRegister(function() {Emote.initImageURL("http:\/\/static.ak.fbcdn.net\/images\/emote\/emote.gif?0:93872");});
onloadRegister(function() {window.statusControl = new fbStatusControl(0);});
onloadRegister(function() {window.buddyList = new fbBuddyList();});
onloadRegister(function() {buddyList.initNoRender(0, {}, 0, 0);});
onloadRegister(function() {window.chatDisplay = new fbChatDisplay({"505421674":{"name":"Scott Raymond","firstName":"Scott","thumbSrc":"http:\/\/profile.ak.facebook.com\/v225\/769\/120\/q505421674_8113.jpg","status":"Now? I'm on the way.","statusTime":1216248288,"statusTimeRel":"17 hours ago"}}, {}, 1, "http:\/\/www.new.facebook.com\/profile.php", "http:\/\/www.new.facebook.com\/inbox\/?compose", {"sound":1,"typ_send":true,"typ_show":true});});
onloadRegister(function() {window.chatTabSlider = new fbChatTabSlider();});
onloadRegister(function() {chatDisplay.load();chatTabSlider.load();});
onloadRegister(function() {channelManager.addChannel("p_505421674", 0, bind(presence, "handleMsg"),bind(presence, "start"),bind(presence, "connectionShutdown"),bind(presence, "restart"));setTimeout(function() {presence.doSync();}, 100);});
onloadRegister(function() {channelManager.iframeLoad("\/iframe\/9?r=static.ak.fbcdn.net\/rsrc.php\/pkg\/70\/110506\/js\/common.js.pkg.php", "channel02", 80, 0);});
onloadRegister(function() {new ScrollArea("id_487f6b98d2f1c5728781530_scroll", "id_487f6b98d2f1c5728781530_content", "id_487f6b98d2f1c5728781530_down", "id_487f6b98d2f1c5728781530_up").setMaxHeight(320);});
onloadRegister(function() {placeholderSetup('q');});
onloadRegister(function() {window.search_friend_source.url_templates = {"u":{"photo":"http:\/\/www.new.facebook.com\/profile.php?id=%25d&v=photos","default_url":"http:\/\/www.new.facebook.com\/profile.php?id=%d"},"g":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/group.gif?0:39263","default_url":"http:\/\/www.new.facebook.com\/group.php?gid=%d"},"e":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/event.gif?0:39263","default_url":"http:\/\/www.new.facebook.com\/event.php?eid=%d"},"p":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/fbpage.gif?0:72158"},"search":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/search.gif?0:97819","default_url":"http:\/\/apps.new.facebook.com\/s.php?init=q&q=%s"}};});
onloadRegister(function() {window.ADVANCED_SEARCH_TYPEAHEAD = false;});
onloadRegister(function() {new MenuBar("fb_menubar").setTimeoutInterval(250).init();});
onloadRegister(function() {window.search_friend_source.url_templates = {"u":{"default_url":"http:\/\/www.new.facebook.com\/profile.php?id=%d","photo":"http:\/\/www.new.facebook.com\/profile.php?id=%25d&v=photos"},"g":{"default_url":"http:\/\/www.new.facebook.com\/group.php?gid=%d","icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/group.gif?0:39263"},"e":{"default_url":"http:\/\/www.new.facebook.com\/event.php?eid=%d","icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/event.gif?0:39263"},"p":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/fbpage.gif?0:72158"},"search":{"icon":"http:\/\/static.ak.fbcdn.net\/images\/app_icons\/search.gif?0:97819","default_url":"http:\/\/apps.new.facebook.com\/s.php?init=q&q=%s"}};});
onloadRegister(function() {window.ADVANCED_SEARCH_TYPEAHEAD = false;});
onloadRegister(function() {LiveMessageDispatcher.MSG_TYPE = "app_msg"});
onloadRegister(function() {window.livemessage_dispatcher = new LiveMessageDispatcher();});
onloadRegister(function() {new PlatformCanvasController(5020558873);});
onloadRegister(function() {window.loading_initial_content_div = false;});
onloadRegister(function() {var n = "rtime"; (window.ge && ge(n)) && (ge(n).title += " | 476");});