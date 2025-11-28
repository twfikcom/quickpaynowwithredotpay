import React from 'react';

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string; // Full content for the modal/page
  date: string;
  image: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FAQItem {
  question: string;
  answer: string;
}