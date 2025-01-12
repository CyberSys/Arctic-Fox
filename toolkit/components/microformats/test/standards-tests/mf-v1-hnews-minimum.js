/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.24
Mocha integration test from: microformats-v1/hnews/minimum
The test was built on Fri Sep 25 2015 13:26:26 GMT+0100 (BST)
*/

assert = chai.assert;


describe('hnews', function() {
   var htmlFragment = "<div class=\"hnews\">\n    <div class=\"entry hentry\">\n        <h1><a class=\"entry-title\" rel=\"bookmark\" href=\"http://microformats.org/2012/06/25/microformats-org-at-7\">microformats.org at 7</a></h1>\n        <div class=\"entry-content\">\n            <p class=\"entry-summary\">Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities.</p>\n\n            <p>The microformats tagline “humans first, machines second” \n                forms the basis of many of our \n                <a href=\"http://microformats.org/wiki/principles\">principles</a>, and \n                in that regard, we’d like to recognize a few people and \n                thank them for their years of volunteer service </p>\n        </div>  \n        <p>Updated \n            <time class=\"updated\" datetime=\"2012-06-25T17:08:26\">June 25th, 2012</time> by\n            <span class=\"author vcard\"><a class=\"fn url\" href=\"http://tantek.com/\">Tantek</a></span>\n        </p>\n    </div>\n\n    <p class=\"source-org vcard\">\n        <a class=\"fn org url\" href=\"http://microformats.org/\">microformats.org</a> \n    </p>\n</div>";
   var expected = {"items":[{"type":["h-news"],"properties":{"entry":[{"value":"microformats.org at 7","type":["h-entry"],"properties":{"name":["microformats.org at 7"],"url":["http://microformats.org/2012/06/25/microformats-org-at-7"],"content":[{"value":"Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities.\n\n            The microformats tagline “humans first, machines second” \n                forms the basis of many of our \n                principles, and \n                in that regard, we’d like to recognize a few people and \n                thank them for their years of volunteer service","html":"\n            <p class=\"entry-summary\">Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities.</p>\n\n            <p>The microformats tagline “humans first, machines second” \n                forms the basis of many of our \n                <a href=\"http://microformats.org/wiki/principles\">principles</a>, and \n                in that regard, we’d like to recognize a few people and \n                thank them for their years of volunteer service </p>\n        "}],"summary":["Last week the microformats.org community \n                celebrated its 7th birthday at a gathering hosted by Mozilla in \n                San Francisco and recognized accomplishments, challenges, and \n                opportunities."],"updated":["2012-06-25 17:08:26"],"author":[{"value":"Tantek","type":["h-card"],"properties":{"name":["Tantek"],"url":["http://tantek.com/"]}}]}}],"source-org":[{"value":"microformats.org","type":["h-card"],"properties":{"name":["microformats.org"],"org":["microformats.org"],"url":["http://microformats.org/"]}}]}}],"rels":{"bookmark":["http://microformats.org/2012/06/25/microformats-org-at-7"]},"rel-urls":{"http://microformats.org/2012/06/25/microformats-org-at-7":{"text":"microformats.org at 7","rels":["bookmark"]}}};

   it('minimum', function(){
       var doc, dom, node, options, parser, found;
       dom = new DOMParser();
       doc = dom.parseFromString( htmlFragment, 'text/html' );
       options ={
       		'document': doc,
       		'node': doc,
       		'baseUrl': 'http://example.com',
       		'dateFormat': 'html5'
       };
       found = Microformats.get( options );
       assert.deepEqual(found, expected);
   });
});
