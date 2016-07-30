
$(function() {
    'use strict';
    describe('RSS Feeds', function() {
        // variable allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // loop through each feed, ensures it thas a name defined
        it('have defined non-empty name and URL',function(){
            allFeeds.forEach(function(elem){
                expect(elem.url).toBeDefined();
                expect(elem.url.length).not.toBe(0);
                expect(elem.name).toBeDefined();
                expect(elem.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        // menu is hidden when loaded
        var menuIcon = $('.menu-icon-link');
        
        it('is hidden by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // menu change visibility when clicked
        it('changes visibility when clicked', function() {
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });        
    });

    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, done);
        });
        // initial entries have at least an entry
        it('has at least an entry within container', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function(){
        var currentContent;
        // loadFeed 0    
        beforeEach(function(done){
            loadFeed(0,function(){
                currentContent = $('.feed').html();
                done();
            });
        });
        // compare loadFeed(1) and (0), new feed section change content
        it('changes the content when a new feed is loading', function(done){
            loadFeed(1, function(){
                expect($('.feed').html()).not.toEqual(currentContent);
                done();
            });
           
        });
    });
    
}());
