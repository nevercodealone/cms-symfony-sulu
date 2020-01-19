<?php
namespace NCATesting\Page;

class Training
{
    public static $URL = '/php-training';
    public static $navigationFirstCourse = 'body > header > div > div > div > nav > ul > li:nth-child(3) > ul > li > a';

    public static $overviewListItem = '//*[@data-q="list-item"]';
    public static $overviewYTItem = '//*[@data-q="yt-item"]';

    public static $detailHeadline = 'h1.course-title';
}
