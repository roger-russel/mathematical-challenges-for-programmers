<?php

$initialArray = [1,12,10,19,20,14,13,8,7,16,18,6,2,3,15,18,9,4,5,11,17,10,13];

foreach( $initialArray as $v ) {
    $vAbs = abs($v);
    if( $initialArray[$vAbs-1] < 0 ){
        $duplicated = $vAbs;
        break;
    }else{
        $initialArray[$vAbs-1] *= -1;
    }    
}

echo "\n";
echo $duplicated;
echo "\n\n";
