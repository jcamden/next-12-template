Feature: prisma-api page

  Scenario Outline: Hovering over a post makes it turn red

    Given I am on the prisma-api page
    When I hover over a post
    Then the post should turn red
