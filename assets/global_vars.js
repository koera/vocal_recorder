//Page ID Reference (all actual homepages share the id of 1)

//Beijing: Redesign HP = 717
        // Home Photos = 810
        // Chinese HP  = 759
        // Chinese Home Photos = 811

//Seoul:   Redesign HP = 670
        // Home Photos = 721
        // Chinese HP  = 720
        // Chinese Home Photos = 722

//Shanghai: Redesign HP = 30437
         // Home Photos = 30559
         // Chinese HP  = 30495
         // Chinese Home Photos = 30561

//Singapore: Redesign HP = 494
          // Home Photos = 585
          // Chinese HP  = 584
          // Chinese Home Photos = 586

//Suzhou: Redesign HP = 971
       // Home Photos = 1099
       // Chinese HP  = 1013
       // Chinese Home Photos = 1100


function loadJS(){

// Class of tier 1 navigation
var mainNavClass = '.nav-main';

// Mobile navigation?
var offCanvas = true;

// Display of the tier 1 section title of the current page you are on.
var sectionTitle = false;

// Place the section title before what element?
var sectionTitleLocation = '.nav-sub-container .bannermodtitle';

    // =============================
    // CSS: user agent selectors
    // =============================

    // rog.ie/blog/html5-boilerplate-addon

    var b = document.documentElement;
    // Add browser information as a data attribute on the `html` tag.
    b.setAttribute('data-useragent', navigator.userAgent);
    // Add platform information as a data attribute on the `html` tag.
    b.setAttribute('data-platform', navigator.platform );
    // Class devices that register touch gestures.
    b.className += ((!!('ontouchstart' in window) || !!
      ('onmsgesturechange' in window))?' touch':'');




    // =============================
    // Navigation
    // =============================

    // Put each mega menu div into each respective dhtml menu
    $j('#bottombanner .mega-menu').each(function(i) {
        $j(this).prependTo($j('div[id*="dhtmlmenu"]').eq(i).find('ul'));
    });


    // Put the dropdowns in their respective sections in the main nav
    $j('.nav-main a').fsMenus();
    // $j('a[data-menu="ql_menu"]').fsMenus();


    // 4 Column Nav Layout
    var num_cols = 2,
      container = $j('.nav-main .fsMenu > ul'),
      listItem = 'li',
      listClass = 'twoCol-list';
    container.each(function() {
      var items_per_col = new Array(),
        items = $j(this).find(listItem),
        min_items_per_col = Math.floor(items.length / num_cols),
        difference = items.length - (min_items_per_col * num_cols);
      for (var i = 0; i < num_cols; i++) {
        if (i < difference) {
          items_per_col[i] = min_items_per_col + 1;
        }
        else {
          items_per_col[i] = min_items_per_col;
        }
      }
      for (var i = 0; i < num_cols; i++) {
        $j(this).append($j('<ul ></ul>').addClass(listClass));
        for (var j = 0; j < items_per_col[i]; j++) {
          var pointer = 0;
          for (var k = 0; k < i; k++) {
            pointer += items_per_col[k];
          }
          $j(this).find('.' + listClass).last().append(items[j + pointer]);
        }
      }
    });



    // =============================
    // Off Canvas
    // =============================

    if (offCanvas === true) {
      var menuItems = ['.nav-util li.search form', '.nav-main', '.nav-util']; //List what you need

      $j('#bodydiv').prepend('<button class="exit-off-canvas"></button><div class="off-canvas-menu"></div>');

      $j('<div class="off-canvas-container"><button class="off-canvas-trigger">Menu</button></div>').prependTo('#topcontainer');

      $j('body').attr('data-drawer-state','invisible');

      $j('.off-canvas-trigger').click(function() {

        if ($j('body[data-drawer-state=invisible]').length === 1) {

          $j('body').attr('data-drawer-state','visible');

        } else {

          $j('body').attr('data-drawer-state','invisible');

        }

      });

      $j('.exit-off-canvas').click(function() {
        $j('body').attr('data-drawer-state','invisible');
      });

      $j.each(menuItems, function(i, val) {
        $j(val).clone().appendTo('.off-canvas-menu');
      });


      $j('#topbanner .nav-main > li:nth-child(4) > a').clone().appendTo('.off-canvas-container');

      $j('.off-canvas-menu').append('<div class="translate-pill"><a class="chineseBtn" href="#"></a><a class="englishBtn" href="#"></a></div>');

    }




    // =============================
    // Section Title
    // =============================

    // if (sectionTitle === true) {
    //   var sectionTitleName = trackingpath.split('/')[1];
    //   $j(sectionTitleLocation).prepend('<div class="section-title">' + sectionTitleName + '</div>');
    // }




    // =============================
    // Search
    // =============================
    $j('.open-search').on('click', function(e) {
        $j('body').addClass('search-active');
    });

    $j('.close-search').on('click', function(e) {
        $j('body').removeClass('search-active');
        e.preventDefault();
    });

    //Search Value Replace
    $j('.nav-util form #keywords, .off-canvas-menu form #keywords').on('focus', function() {
        if($j(this).val() == 'What are you looking for?') {
            $j(this).val('');
        }
    });

    $j('.nav-util form #keywords, .off-canvas-menu form #keywords').on('blur', function() {
        if($j(this).val() == '') {
            $j(this).val('What are you looking for?');
        }
    });



    // =============================
    // Modules
    // =============================

    // Remove empty banner titles
    $j('.bannermodtitle:empty').remove();

    // Remove empty items in calendar lists
    $j('.caldata > ul:empty, .caldata .eventspacer:empty').remove();

    // Directory Page Type
    if($j('.pagetype_directory').length > 0) {

      // Remove inline submit width
      $j('[name*="filter"] *').removeAttr('style');

      // Create a preparatory container
      $j('[name*="filter"]').after('<div class="directory"></div>');

      // Insert each entry into the directory container
      // Clean up each entry's structure
      $j('.fsDirEntry').each(function() {

        $j(this)
          .parent().prev().find('img')
            .wrap('<div class="image"></div>')
            .prependTo($j(this));

        $j(this)
          .find('> div')
            .wrapAll('<div class="entry-details"></div>');

        $j(this)
          .appendTo('.directory');

        $j(this).removeAttr('style');
        $j(this).find('*').removeAttr('style');

      });


      // Groups Page
      // =============================

      if($j('[name*="findmembers"]').length) {

        $j('table[style*="background"]').after('<div class="directory"></div>');
        $j('table[style*="background"] .directory').remove();

        $j('td[width*="49%"] > div').each(function() {

          $j(this)
            .addClass('fsDirEntry')
            .wrapInner('<div class="entry-details"></div>')
            .appendTo('.directory');

        });

      }

    }


    // Account Bar (iOS :hover fix)
    // =============================

    $j("#acct_bar").mouseenter(function() {

      $j(this).attr('onclick','').css('cursor','pointer');

    });



    // Horizontal Scroll
    // =============================

    if($j('#scrollContainer').length > 0) {

      $j('#fsMultiContent').before('<div class="scroll-window"></div>');
      $j('.contentElement').appendTo('.scroll-window');

    }


    // Responsive Calendar
    // =============================
    if($j('html').hasClass('pagetype_calendar')) {
        //Mobile Calendar Pages
        function calInit() {

            //set the pixel width where the change occurs so the calendar can be reset
            var breakPoint = 700;

            //resizable calendar setup
            $j('html').addClass('smallCal');

            $j('#calendarcon .daycap_today').parents('.caldata').addClass('selected');

            var eventview = $j('<div class="event-view" />').appendTo('#calendarcon');
            $j('#calendarcon').find('.hotdate').clone().appendTo(eventview);
            $j('#calendarcon').on('click','.dblock,.dblock_half',function(){
                $j('#calendarcon .caldata').removeClass('selected');
                var date = $j('.caldata',this).clone();
                eventview.html('').append(date);
                $j('.caldata',this).addClass('selected');
                var t = eventview.offset().top - 16;
                $j('html,body').animate({scrollTop: t},450);
            });

            var scrollUp = $j('<div class="scroll-up"><span>Back Up To Calendar</span></div>').insertAfter(eventview);
            scrollUp.on('click',function(){
                var t = $j('#calendar_nav').offset().top - 16;
                $j('html,body').animate({scrollTop: t},450);
            });

            var bpCheck = 0;
            $j(window).on('load resize',function(){
                var screenW = $j(window).width();
                var screenBp;

                if( screenW > breakPoint){
                    screenBp = breakPoint;
                }
                if (screenBp != breakPoint) {
                    breakPoint = screenBp;
                    //fillGrid(); //reset calendar grid
                }

            }); //on resize

        } //calInit()

        calInit();
    }



    //Moves Powered By logo
    $j('#poweredby').appendTo('#bottombanner');

    $j('.event_stackrepeat').each(function() {
      $j(this).parents('.eventobj').addClass('repeated-event');
    });

    if($j('html').hasClass('pagetype_portal')) {
      var checkPortalCal = setInterval(function(){
            if($j('.fsEl_Calendar .eventobj').length > 0){
              clearInterval(checkPortalCal);
              $j('.event_stackrepeat').each(function() {
                $j(this).parents('.eventobj').addClass('repeated-event');
              });

              $j('.eventobj.repeated-event').next('.eventobj');
            }
      },100);
    }



    if(pageid == 1 || pageid == 30437 || pageid == 30495) {

        //English Homepage
        if(pageid == 1 || pageid == 30437) {
          $j('#slider').load('page.cfm?p=30559&pullcontent=true&LockSSL=true .contentElementDiv ', function() {
              homeSlider();
          });

          // $j(".footer-search #keywords").autocomplete({
          //   source: autocompleteTags
          // });

        //Chinese Homepage
      } else if(pageid == 30495) {
          $j('#slider').load('page.cfm?p=30561&pullcontent=true&LockSSL=true .contentElementDiv ', function() {
              homeSlider();
          });

          // $j(".footer-search #keywords").autocomplete({
          //   source: autocompleteTags_translated
          // });
      }

        var homeSlider = function() {
            $j('#slider .contentElementDiv').each(function() {
              var titleID = $j(this).find('.contentElementTitle').text(),
                  imgBG = $j(this).find('img').attr('src');

              $j(this).find('.contentElementImage').wrap('<a href="page.cfm?p='+titleID+'"></a>');
              $j(this).css('background-image', 'url('+imgBG+')');
            })

            $j('#slider').slick({
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: true,
                pauseOnHover: false
            });


            var click;
            $j('<span class="downArrow">').insertAfter('#bodydiv');

            $j('.downArrow').attr('data-arrowhidden', 'false');
            $j(window).on('scroll', function() {
              if($j('.downArrow').offset().top > 2570) {
                $j('.downArrow').attr('data-arrowhidden', 'true');
              } else {
                $j('.downArrow').attr('data-arrowhidden', 'false');
              }
            });

            click = false;
            $j('.downArrow').on('click', function() {
              if(click === false) {
                $j("html, body").animate({ scrollTop: $j('#midcontainer').offset().top }, 2000);
                click = true
              } else if(click === true){
                $j("html, body").animate({ scrollTop: $j('#bottombanner').offset().top }, 2000);
                click = false;
              }
            });
        }


        //Keep infographic heights the same (based on tallest height out of the group)
        function infoHeights() {
            var heights = 0;
            $j('.infographic li').each(function() {
                if($j(this).outerHeight() > heights){
                    heights = $j(this).outerHeight();
                }
            });
            $j('.infographic li').css('min-height', heights);
        }
        infoHeights();

        $j(window).resize(function() {
            $j('.infographic li').removeAttr('style');
            infoHeights();
        })


        //Home Grid configuration
        $j('.grid-original #newscon .newspostitem, .grid-2-3 #newscon .newspostitem, .grid-3-2 #newscon .newspostitem, .grid-alt1 #newscon .newspostitem, .grid-alt2 #newscon .newspostitem').each(function() {
            var background = $j(this).find('.newsposttitle img').attr('src');
            $j(this).css('background-image', 'url('+background+')');
        });

        $j('.grid-original #newscon .newspostitem:nth-child(2)').nextUntil('.grid-original #newscon .newspostitem:nth-child(4)').andSelf().wrapAll('<ul>');
        $j('.grid-alt1 #newscon .newspostitem:nth-child(5)').nextUntil('.grid-alt1 #newscon .newspostitem:nth-child(7)').andSelf().wrapAll('<ul>');
        $j('.grid-alt2 #newscon .newspostitem:nth-child(3)').nextUntil('.grid-alt2 #newscon .newspostitem:nth-child(5)').andSelf().wrapAll('<ul>');



        //Build Video Modal
        $j('<div class="grid-modal"><div class="inner-grid-modal"><button class="close-modal">Close</Button></div></div>').appendTo('#bodydiv');

        function loadBannerMedia(id){
            var siteroot = "";
            var url = siteroot+'/cf_endpoints/routes.cfm/media/groups/'+id+'/objects.json'
            $j.get(url,function(data){
                /* -- available group data --
                    data.group_title
                    data.group_description
                    data.group_type (denotes playlist type: 1 = photo, 2 = audio, 3 = video)
                */

                $j(data.objects).each(function(i, object){
                     // -- available object data --
                     //    this.object_id
                     //    this.object_title
                     //    this.object_description
                     //    this.thumb_path

                     //    -- photo & video type --
                     //    (video loads thumbnail)
                     //    this.mobile_path
                     //    this.display_path
                     //    this.full_path

                     //    -- audio type --
                     //    this.song_path

                     //    -- video type --
                     //    this.mobilevideo_path (360p)
                     //    this.mobilevideo_download_path (mobilevideo_path without query string)
                     //    this.normalvideo_path (480p)
                     //    this.fullvideo_path (1080p or highest res)
                    

                    $j('.inner-grid-modal')
                    .append("<video poster="+object.display_path+" src="+object.normal_video_path+" muted controls loop autoplay /></div>");
                });
            }).done(function() {

            });

        }

        $j('.grid-original #newscon a[href*="popMedia"], .grid-2-3 #newscon a[href*="popMedia"], .grid-3-2 #newscon a[href*="popMedia"], .grid-alt1 #newscon a[href*="popMedia"], .grid-alt2 #newscon a[href*="popMedia"]').each(function(){
            $j(this).parents('.newspostitem').addClass('video-post');
            var bannerMediaID = $j(this).attr('href').split('g=')[1].split("'")[0];

            $j(this).parents('.video-post').on('click', function() {
                $j('body').addClass('video-active');
                loadBannerMedia(bannerMediaID);
            });
        });

        $j('.video-post .newsposttitle a').on('click', function(e) {
            e.preventDefault();
        });

        //For each post that is not a video post check to see if they want it linked to an external page otherwise hide the news post description
        $j('div[class*="grid-"] .newspostitem:not(.video-post)').each(function() {
            if($j(this).find('.newspostdesc .fs_style_49').length === 0) {
              $j(this).find('.newspostdesc').remove();
            } else {
              var externalHref = $j(this).find('.newspostdesc .fs_style_49').attr('href');
              $j(this).find('.newsposttitle a').attr('href', externalHref).attr('target', '_blank');
        
              $j(this).find('.newspostdesc').remove();
            }
        });

        $j('.close-modal').on('click', function() {
            $j('body').removeClass('video-active');
            $j('.grid-modal').find('video').remove();
        });


        //Mobile Grid Config
        $j('#contentdiv #text1 .fs_style_30').clone().appendTo('.grid-original ul');
        $j('#contentdiv #text1 .fs_style_29').clone().insertAfter('.grid-original .newspostitem:nth-child(3)');
        $j('#contentdiv #text1 .fs_style_31').clone().appendTo('.grid-original #newscon');
        $j('.grid-original #newscon ul .newspostitem:nth-child(2)').clone().insertAfter('.grid-original #newscon .fs_style_29');
        $j('.grid-original #newscon .newspostitem:nth-child(6), .grid-original #newscon .newspostitem:nth-child(7)').clone().insertAfter('#contentdiv .text #newscon .newspostitem:nth-child(8)');

        //Alt1 Option
        $j('#contentdiv #text1 .fs_style_30').clone().appendTo('.grid-alt1 ul');
        $j('#contentdiv #text1 .fs_style_29').clone().insertAfter('.grid-alt1 .newspostitem:nth-child(2)');
        $j('#contentdiv #text1 .fs_style_31').clone().appendTo('.grid-alt1 #newscon');

        //Alt2 Option
        $j('#contentdiv #text1 .fs_style_30').clone().prependTo('.grid-alt2 ul');
        $j('#contentdiv #text1 .fs_style_29').clone().insertAfter('.grid-alt2 .newspostitem:first-child');
        $j('#contentdiv #text1 .fs_style_31').clone().appendTo('.grid-alt2 #newscon');

        //Conditional that un-hides the buttons based on the grid used
        if($j('.grid-2-3').length || $j('.grid-3-2').length) {
          $j('body').addClass('showGridBtns');
        }


        //Search Value Replace
        $j('.footer-search form #keywords').on('focus', function() {
            if($j(this).val() == 'Search programmes, interests, and more.' || $j(this).val() == '搜索课程、感兴趣的内容等.') {
                $j(this).val('');
            }
        });

        $j('.footer-search form #keywords').on('blur', function() {
            if($j(this).val() == '' && $j('a.chinese-translate-show').length == 0) {
                $j(this).val('Search programmes, interests, and more.');
            } else if($j(this).val() == '' && $j('a.chinese-translate-show').length > 0) {
                $j(this).val('搜索课程、感兴趣的内容等.');
            }
        });
    }



    // Translate Button(s)
    //=====================
    var chineseSrc = $j('.lang_zh').attr('href');
    var englishSrc = $j('.lang_en').attr('href');
    if(chineseSrc) {
      $j('.nav-util a[title*="Translate"], .translate-pill .chineseBtn').attr('href', chineseSrc);

      $j('.englishBtn').addClass('translate-active');
    } else if(englishSrc) {
      $j('.nav-util a[title*="翻译"], .translate-pill .englishBtn').attr('href', englishSrc);

      $j('.chineseBtn').addClass('translate-active');

      $j('.nav-util a[title*="翻译"]').addClass('chinese-translate-show');
    }


    //Translates "Menu" for mobile menu
    if($j('.chineseBtn.translate-active').length > 0) {
      $j('.off-canvas-trigger').text("菜单");
    }

    //Translates "Menu" for mobile left banner nav
    if($j('.nav-sub').find('.navmod li').length > 0 || $j('.nav-sub').find('.portalnavmod li').length > 0 ) {
      var menuBtnText;
      if($j('.nav-main-container .nav-main .fsSection-btn').length > 0) {
          menuBtnText = $j('.nav-main-container .nav-main .fsSection-btn > a').text();
      } else {
          if($j('.englishBtn.translate-active').length > 0) {
            menuBtnText = '菜单';
          } else {
            menuBtnText = 'Menu';
          }
      }
      $j('#leftbanner .nav-sub .bannermodcontent').shrinkToBtn({
          btnHTML : '<div class="stbBtn"><span>'+menuBtnText+'</span></div>',
          containerID : 'nav5',
          animate : true
      });
    } else {
      $j('.nav-sub').addClass('nav-sub-empty');
    }



    // Flexible Font Icons
    //=====================

    //icon name, font color, icon position, font size [optional]
    $j('.fs_style_45').each(function() {

      if($j(this).is('p') || $j(this).is('li') || $j(this).is('strong') || $j(this).is('em') || $j(this).is('div') || $j(this).is('span')) {
        var fontOptionsHide = $j(this).text().split('~');

        var fontOptions = fontOptionsHide[1];
        fontOptions = $j.map(fontOptions.split(','), $j.trim);
  
        $j(this).addClass(fontOptions[0]);
        $j(this).attr('data-color', fontOptions[1]);
        $j(this).attr('data-position', fontOptions[2]);
  
        if(fontOptions[3] != undefined) {
          $j(this).css('font-size', ''+fontOptions[3]+'px');
        }

        $j(this).text(fontOptionsHide[2]);

        $j(this).addClass('showText');
      } else if($j(this).is('a')) {
        var fontOptions = $j(this).attr('title');
        fontOptions = $j.map(fontOptions.split(','), $j.trim);
  
        $j(this).addClass(fontOptions[0]);
        $j(this).attr('data-color', fontOptions[1]);
        $j(this).attr('data-position', fontOptions[2]);
  
        if(fontOptions[3] != undefined) {
          $j(this).css('font-size', ''+fontOptions[3]+'px');
        }
      }


    });



}
