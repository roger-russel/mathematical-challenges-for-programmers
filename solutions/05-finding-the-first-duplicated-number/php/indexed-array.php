<?php

$initialArray = [1,12,10,19,20,14,13,8,7,16,18,6,2,3,15,18,9,4,5,11,17,10,13];

$indexedArray = [];

foreach( $initialArray as $v ) {
    if(isset($indexedArray[$v])){
        $duplicated = $v;
        break;
    }else{
        $indexedArray[$v] = true;
    }    
}

echo "\n";
echo $duplicated;
echo "\n\n";
