<?php

$question = json_decode($_POST["question"]);

echo "Massage was succesfully send: " . $question->val;
