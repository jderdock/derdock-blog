---
title: How To Migrate from ExpressionEngine 5 to Craft CMS
date: '2019-08-12T01:01:00+04:00'
template: 'post'
draft: false
slug: '/posts/how-to-migrate-from-expressionengine5-to-craft/'
description: 'A simple guide on how to migrate from ExpressionEngine 5 to Craft CMS'
---

Searching the web for "how-to" articles on migrating from ExpressionEngine to Craft produces a few articles, but all are aimed at earlier versions of ExpressionEngine and don't apply to up-to-date installations. Pixel and Tonic provide a [document for EE 2.x](https://docs.craftcms.com/feed-me/v4/guides/migrating-from-expressionengine.html) that states _"This guide is also aimed at ExpressionEngine 2.x. We will not be offering a guide for ExpressionEngine 3.x."_.

I'm currently in the process of testing an EE > Craft migration and thought I'd put my findings here.

**If you have any questions, processes that I could improve or concerns, feel free to [email me](mailto:jderdock@gmail.com).**

###Caveats

1. This guide was put together using ExpressionEngine 5.2.3 and Craft CMS 3.2.8 and assumes you're using similar versions.
2. I am new to Craft. I've spent many hours in ExpressionEngine, but Craft is new to me. I'm sure there's a better way to do some of these things, but this (so far) has worked for me.

3. Given caveats 1 and 2, please proceed at your own risk.

##1. Back up your databases

As always with these things, be comfortable backing up and restoring your database.

## 2. Install the Smart Export PRO ExpressionEngine Add-on

This export tool from ZealousWeb allows you to export your EE Channel data as an XML or CSV file. I found this add-on by searching Devot-EE's Add-On marketplace. It's currently priced at \$49.00 and it's been a useful tool in this process. You can purchase it [here](https://devot-ee.com/add-ons/smart-export-pro).

## 3. Configure Smart Export PRO

This is going to be different for each installation depending on your content, but these settings enabled ExpressionEngine "textarea" custom fields to translate over to Craft "Plain Text" field types without formatting issues.

Be sure to turn off the Encode HTML tags toggle to avoid any translation issues.

Save your settings.

![Smart Export Pro Settings](https://d1zl92x51a6u9j.cloudfront.net/smart_export_pro_settings.jpg)

## 4. Set up an export

In ExpressionEngine, navigate to Developer > Add-Ons > Smart Export Pro. Click the **Create New** button.

Select the Channel that you'd like to export to Craft. I've selected ALL under the Status dropdown to export all entries in this channel.

Now select the fields you'd like to export. When you import your data into Craft, you're going to have to map these fields to fields in Craft, so try to be selective and only select the fields you need. It will make the import process a little bit easier.

For my purposes, I didn't need to export any fields relating to Comments as I don't plan on carrying them over to Craft. I also don't need fields related to Forums, View Counts, Edit Dates, etc. I did need all my Custom Fields and Categories.

![Smart Export Pro export fields](https://d1zl92x51a6u9j.cloudfront.net/smart_export_pro_export_fields.jpg)

To avoid any possible ExpressionEngine > Craft authentication issues, I've made my exports public. I don't have any sensitive data in these channels, so it's not a concern (and I'll delete them after the migration).

## 5. Export your data

After creating your export, you'll see it in your Export List in Smart Export Pro. Click the Cloud/arrow download icon and your report will begin generating.

When it's complete, click the link to download your export.

I've been testing this migration process with a local Craft installation and an ExpressionEngine site live/in production. My strategy has been to upload the exported file to a location on my production server where my local Craft installation could easily access the file to import. In my case, I've renamed and uploaded the exported XML file to `https://mysite.com/artist_news_export.xml`

## 5a. Modify your XML file (if migrating assets)

I had to do a good amount of finding and replacing to point Feed Me to the exact URL's of my assets in ExpressionEngine.

For example, I had lines like:

    <artist_story_image><![CDATA[/images/artiststoryimages/image-name.jpg]]></artist_story_image>

I had to do a find all instances of `CDATA[/images/` and replace with `CDATA[https://mysite.com/images/]`so that all my image paths were correct.

For images embedded in fields, ExpressionEngine outputs the asset path as something like:

    <img src="{filedir_4}image-name.jpg" />

I had to find and replace all instances of `{filedir_4}` to `https://mysite.com/asset_directory_name/`

To find the appropriate folder that matches the file directory number in ExpressionEngine, go to EE's File Manager and click on the Edit/pencil button. Your URL should now be something like:

    https://mysite.com/index.php/?/cp/files/directory/22&S=xxxxxxxx

The 22 in that URL is the number you're looking for, so make sure you match the appropriate file directory to it's filedir_number.

## 6. Install the Feed Me Plugin

In Craft, go to the Plugin Store in your sidebar and search for Feed Me. Follow the directions to get that installed.

## 7. Create your new Section in Craft

If you're new to Craft (like I am), I'd recommend understanding how Craft Sections and Fields work before taking these next steps. [Ryan Irelan](https://twitter.com/ryanirelan) has a great free course called [Up and Running with Craft 3](https://craftquest.io/courses/craft-cms-3-tutorials) that's a great primer understanding how to set up a Craft Section with appropriate Fields.

Click **New Section** in Craft. Give it a Name and choose **Channel** as your section type. Click save.

## 8. Create your new Fields

In Craft, go to Settings > Fields and click **New Group**. Here I'm going to create fields that match up with the fields I've exported from ExpressionEngine. In this case, I've named my Field Group "Artist News".

I've decided to map the migration out this way:

| ExpressionEngine                       | Craft                                   |
| -------------------------------------- | --------------------------------------- |
| Title                                  | Title (Field generated by default)      |
| Entry Date                             | Entry Date (Date/Time)                  |
| Author                                 | Author                                  |
| Status                                 | Status                                  |
| URL Title                              | URL Title                               |
| Story Sub Title (text)                 | Artist Story Subtitle (Plain Text)      |
| Story Body (wygwam)                    | Artist Story Body (Plain Text)          |
| Artist Story Summary (textarea)        | Artist Story Summary (Plain Text)       |
| Artist Read More Copy (text)           | Artist Read More Copy (Plain Text)      |
| Artist Story Image (file)              | Artist Story Image (asset)              |
| Artist Story Image - Index Only (file) | Artist Story Image - Index Only (asset) |

First I'm going to set up the new Artist Story Subtitle field. I'm only changing the field name in Craft so that it's more clear in the future. To translate an EE "text" field to a Craft Plain Text Field, I'm simply going to select Plain Text as the field type and keep "Allow line breaks" unchecked, as subtitles are single lines of text.

For Story Body, I'm going to create a new field with a Plain Text and make sure I **do** check the "Allow line breaks" checkbox.

###About rich text fields

To avoid losing formatting from a wygwam or other rich text field during your migration, I've found that importing the field as Plain Text with the "Allow line breaks" checkbox checked is the safest method. If you need the field to be rich text after the migration, you can then install the [Redactor](https://github.com/craftcms/redactor) plug in. I've found the formatting from a Plain Text field translates nicely to a Redactor field, whereas the CKEditor field type plugin gave me formatting issues.

Continue to create your new fields with the appropriate field type.

## 9. Create your Asset fields

If you need to include files/images in an Entry, you'll need to create an Asset volume. Go to Settings > Assets. For my case, I'm going to make Artist News its own volume.

![Asset Settings](https://d1zl92x51a6u9j.cloudfront.net/asset_settings.jpg)

I've set my base URL as _//mysite.com/images/artist_news_ and my File System Path to point to the same directory in my local MAMP installation _(/Applications/mamp/htdocs/craft/web/images/artist_news)_. I imagine I'll have to change these for my production environment, but that's beyond the scope of this blog post. We're just trying to get our content from EE to Craft.

I've also manually created the folder `artist_news` in the location I've specified.

## 10. Create your Assets fields

Back in Settings > Fields > Artist News, create your Asset fields.

I'm restricting uploads to image file types and to the new Asset volume I just created.

![Asset Field Settings](https://d1zl92x51a6u9j.cloudfront.net/asset_field_settings.jpg)

## 11. Add your Fields to your Section

Go to Settings > Sections and click **Edit Entry Types** next to your Section name.

Click the name of your Section and you'll be in the Entry Types view.

Having already created your fields in a previous step, simply drag the tab containing your fields up to you field layout area.

![Add your fields to your entry type](https://d1zl92x51a6u9j.cloudfront.net/entry_types.jpg)

##12. Configure your Feed Me import

Point your Feed URL to the XML file that you exported from EE and uploaded to your production server. I'm only testing this process at the moment and having the Backup toggle checked was throwing an error, so for this blog post, I've turned it off (please proceed with caution on production sites!).

![Feed Me Text Fields Settings](https://d1zl92x51a6u9j.cloudfront.net/artist_news_feed_me.jpg)

Click Save & Continue.

On the next screen, select the Primary Element that contains your repeatable elements that you'd like to import. Most likely, this will be the number entries you have in your ExpressionEngine Channel. It's unlikely that you'd be migrating a Channel with a single entry, so make sure the dropdown window doesn't say that you only have one element. Here, it's _/root/elements (x316 elements)_.

![Select your primary element](https://d1zl92x51a6u9j.cloudfront.net/primary_element.jpg)

Now we need to map the old EE fields to the new Craft fields we've created.

![mapping EE fields to Craft in Feed Me](https://d1zl92x51a6u9j.cloudfront.net/mapping_fields.jpg)

_note: in my installation, setting the Post Date data format to "Timestamp (s)" worked for me._

Click Save & Continue and then you're ready to run your import! Hopefully when your import completes, you'll see your entries populated in the Entries control panel and your Asset folder filling with your assets.

## 13. That's it! Sort of...

My next hurdle is figuring out how to properly import and export Grid fields. I'll put up another post when I have that figured out.
