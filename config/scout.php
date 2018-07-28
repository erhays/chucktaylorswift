<?php

return [
    "sync" => true,
    "application_id" => "CQ07ZY5ECD",
    "admin_api_key" => "1e325b283c0e134184cd10feb6eced7c",
    "mappings" => [
        [
            'indexName' => 'cts',
            'elementType' => \craft\elements\Entry::class,
            'criteria' => [
                'section' => [
                		'articles',
                		'pages',
                	],
            ],
            'transformer' => function (craft\base\Element $element) {
                return $element->toArray();
            },
        ],
    ],
];

