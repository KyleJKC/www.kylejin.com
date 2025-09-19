---
title: "Gabriel's Horn Generalized: The Relationship Between Volume, Surface Area, Parameter 𝓹, and Rotational Inertia"
summary: "A fun research on Gabriel's Horn"
tags: [Math]
date: 2025-09-18
comments: true
---

This paper was initially written as my final project of AP Calculus BC in my Junior year of high school. I just found it recently and I thought it's kinda fun, so I figured to turn it into Markdown and put it on my website.

The original PDF version written in LaTex can be found [here](/gsh.pdf).

---

**Author:** Kai Cheng (Kyle) Jin  
**Instructor:** Mr. Vezzoli  
**Course:** AP Calculus BC  
**Date:** May 31, 2025

## Abstract

In this final project, I will first derive the volume and surface area of Gabriel's Horn step by step. Then, I will generalize the concept by examining solids formed by rotating

$$
y=\frac{1}{x^{p}}
$$

around the x-axis for $x>1$.

I will demonstrate how I determined the conditions under which any solid within the family of Gabriel's Horn would have a finite volume or finite surface area.

Finally, I will expand this even further towards the direction of Physics. I will derive the rotational inertia for Gabriel's Horn and its relatives, attempting to find the relationship between $p$ and the resulting rotational inertia.

---

## Introduction

Gabriel's horn, also known as Torricelli's trumpet, is a geometric shape created by rotating the curve

$$
y=\frac{1}{x}
$$

around the x-axis for $x>1$, which leads to a paradoxical situation where the structure has a finite volume and an infinite surface area. This characteristic of Gabriel's Horn will be proven mathematically in the next section.

---

## The OG Gabriel's Horn

Consider the classic Gabriel's Horn as mentioned above. I am now going to demonstrate the process of deriving the volume and surface area of it.

### Volume

To determine its volume would be easy. Applying the disk method from Unit 8, the volume of Gabriel's Horn, denoted by $V$, is simply given by the integral

$$
V=\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x}\Bigr)^{2}\pi\,dx.
$$

Evaluating this integral

$$
\boxed{V=\pi\Bigl[-\frac{1}{x}\Bigr]_{1}^{\infty}= \pi,}
$$

it tells us that the volume of Gabriel's Horn would be $pi$ cubic units.

### Surface Area

Finding the surface area of it would be a much more tedious task.

First, we have to establish a fact: The surface area of the resulting solid would be the sum of the product of every infinitesimal portion of the arc length and its corresponding infinitesimal portion of circumference. If we denote the arc length of the graph as $s$ and the surface area of the horn as $A$, we can express the surface area of Gabriel’s Horn as

$$
A=\int_{1}^{\infty} 2\pi\Bigl(\frac{1}{x}\Bigr)\,ds.
$$

Applying the arc length formula, the arc length of Gabriel's Horn can be expressed by

$$
s=\int_{1}^{\infty}\!\!\sqrt{1+\Bigl(\frac{dy}{dx}\Bigr)^{2}}\,dx
   =\int_{1}^{\infty}\!\!\sqrt{1+\Bigl(-\frac{1}{x^{2}}\Bigr)^{2}}\,dx.
$$

If we differentiate both sides with respect to $x$, we get

$$
\frac{ds}{dx}= \sqrt{1+\Bigl(-\frac{1}{x^{2}}\Bigr)^{2}}\Longrightarrow
ds= \sqrt{1+\Bigl(-\frac{1}{x^{2}}\Bigr)^{2}}\,dx.
$$

Now we plug $ds$ back into our original equation for surface area:

$$
A=\int_{1}^{\infty} 2\pi\Bigl(\frac{1}{x}\Bigr)
   \sqrt{1+\Bigl(-\frac{1}{x^{2}}\Bigr)^{2}}\,dx
   =2\pi\int_{1}^{\infty}\!\!\frac{\sqrt{x^{4}+1}}{x^{3}}\,dx.
$$

Now, we have to evaluate the integral. We know that the integral in the equation above

$$
\int_{1}^{\infty}\!\!\frac{\sqrt{x^{4}+1}}{x^{3}}\,dx
$$

would have the same behavior as the series

$$
\sum_{n=1}^{\infty}\frac{\sqrt{n^{4}+1}}{n^{3}}.
$$

We perform a direct comparison test with series

$$
\sum_{n=1}^{\infty}\frac{\sqrt{n^{4}}}{n^{3}}=\sum_{n=1}^{\infty}\frac{1}{n}.
$$

The original series should always be larger than the series above. Since the latter diverges as a harmonic series, we can conclude that the original series also diverges, meaning our original equation for surface area also diverges:

$$
\boxed{A=\lim_{b\to\infty}2\pi\int_{1}^{b}\frac{\sqrt{x^{4}+1}}{x^{3}}\,dx=\infty.}
$$

Now, it is sufficient to conclude that the solid resulting from revolving the graph $y = \tfrac{1}{x}\;(x\ge 1)$ around the $x$-axis, namely Gabriel’s Horn, has a finite volume of $\pi$ and an infinite surface area.

---

## Generalization of Gabriel’s Horn

Gabriel’s Horn is formed by revolving the function $y=\tfrac{1}{x}$ around the $x$-axis with the domain $1\le x<\infty$. What if we make some subtle change to the function, more specifically, giving the $x$ in the denominator a power of $p$? To find the answer, we generalize the function to

$$
y=\frac{1}{x^{p}}.
$$

Now, if we rotate it around the $x$-axis, we can get an infinite amount of relatives of Gabriel's Horn by adjusting the parameter $p$.

### Expressions for Volume and Surface Area

Applying what we found in part I, we know that the volume of such a solid can be expressed as

$$
\boxed{V=\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x^{p}}\Bigr)^{2}\pi\,dx}
$$

and the surface area can be expressed as

$$
A=\int_{1}^{\infty} 2\pi\Bigl(\frac{1}{x^{p}}\Bigr)\,ds.
$$

To determine $ds$, we first take the derivative of the function

$$
\frac{dy}{dx}=-px^{-p-1}.
$$

Then we plug it into the formula for arc length

$$
s=\int_{1}^{\infty}\!\!\sqrt{1+\Bigl(\frac{dy}{dx}\Bigr)^{2}}\,dx
  =\int_{1}^{\infty}\!\!\sqrt{1+p^{2}x^{-2p-2}}\,dx.
$$

Now we take the derivative of $s$ with respect to $x$:

$$
\frac{ds}{dx}= \sqrt{1+p^{2}x^{-2p-2}}\Longrightarrow
ds= \sqrt{1+p^{2}x^{-2p-2}}\,dx.
$$

Finally, we plug $ds$ back into the original surface area integral:

$$
\boxed{A=\int_{1}^{\infty} 2\pi\Bigl(\frac{1}{x^{p}}\Bigr)
   \sqrt{1+p^{2}x^{-2p-2}}\,dx.}
$$

### Evaluating the Integrals

If we can determine the range of values of $p$ for which the two integrals converge, we can generalize the conditions under which any Gabriel’s-Horn-like solid has a finite surface area or volume. There are several ways to find this interval of convergence. Here, I present a method that applies the integral test for infinite series in reverse.

Let’s deal with the volume integral first. According to the integral test for infinite series, the original integral should have the same behavior as the infinite series

$$
\sum_{n=1}^{\infty}\Bigl(\frac{1}{n^{p}}\Bigr)^{2}\pi
   =\pi\sum_{n=1}^{\infty}\frac{1}{n^{2p}}.
$$

It is evident that the series above is a $p$-series. The series converges when the exponent on $n$ is greater than $1$; that is, when

$$
\boxed{p>\frac{1}{2}.}
$$

Now let’s take a look at the surface area integral. Likewise, we can find the interval of convergence by using the integral test in reverse. The original integral will behave the same as the series

$$
\sum_{n=1}^{\infty}
  2\pi\Bigl(\frac{1}{n^{p}}\Bigr)\sqrt{1+p^{2}n^{-2p-2}}.
$$

Now, how do we determine if the series converges or not? I found you can do this by performing the limit comparison with the series

$$
\sum_{n=1}^{\infty}\frac{1}{n^{p}}.
$$

Since we know everything about this $p$-series, if we get a finite and positive result from the limit comparison test, we can easily determine the condition of convergence of the original series. Now, we perform the actual test:

$$
\lim_{n\to\infty}
  \frac{2\pi\bigl(\tfrac{1}{n^{p}}\bigr)\sqrt{1+p^{2}n^{-2p-2}}}{\tfrac{1}{n^{p}}}
  =2\pi.
$$

The result is both finite and positive, meaning we can conclude that the original series as well as the integral for surface area converges under the same condition; that is, when

$$
\boxed{p>1.}
$$

---

## Rotational Inertia of Gabriel's Horn

I totally could have finished up the project at the end of the last section. But it's currently Saturday morning and I am feeling bored, so I figured applying what I learned in AP Physics C to Gabriel's Horn would be fun.

So, taking it even further towards the direction of Physics, I will be attempting to derive the rotational inertia of Gabriel's Horn about the $y$-axis.

### The Classic Case

Let's start by examining the OG Gabriel's Horn again. The formula for rotational inertia, denoted by $I$, is

$$
I=\int{r^{2}}\,dm.
$$

According to Section 2.1, the formula for the volume of Gabriel's Horn is given by

$$
V=\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x}\Bigr)^{2}\pi\,dx.
$$

Let's assume Gabriel's Horn has uniform density of $\rho$, then the total mass of the solid, denoted by $m$, is given by

$$
m={\rho}V=\rho\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x}\Bigr)^{2}\pi\,dx.
$$

Then, the infinitesimal mass $dm$ with respect to $x$ is given by

$$
dm=\frac{1}{x^2}\pi\rho\,dx.
$$

Now we plug $dm$ back into the original formula

$$
I=\int{r^{2}\frac{1}{x^2}\pi\rho\,dx}.
$$

Since the $\vec{r}$ term in the equation is indeed a vector and points to the $x$-axis, we can substitute in $x$ for $r$

$$
I=\int{x^{2}\frac{1}{x^2}\pi\rho\,dx}=\pi\rho\int_{1}^{\infty}dx.
$$

Evaluate this integral, we get

$$
\boxed{I=\lim_{b\to\infty}\pi\rho\Bigl[x\Bigr]_{1}^{b}=\infty}
$$

Interesting. That means the rotational inertia of Gabriel's Horn about the $y$-axis is infinitely large. Since the relationship between angular acceleration $\alpha$, torque $\tau$, and rotational inertia $I$ is described by the rotational form of Newton's Second Law

$$
\alpha=\frac{\tau}{I},
$$

and thus

$$
\boxed{\lim_{I\to\infty}{\alpha=0},}
$$

in simple words, no matter how much torque you apply on Gabriel's Horn, no motion will occur.

### Parameter $p$ and Rotational Inertia

Since we know that the surface area also diverges for the OG Gabriel's Horn but converges for its relatives when

$$
p>1,
$$

I wonder if the rotational inertia would ever converge as we adjust parameter $p$.

According to section 3.1, the volume for any relative of Gabriel's Horn is given by

$$
V=\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x^{p}}\Bigr)^{2}\pi\,dx.
$$

We perform the same steps as what we did above:

$$
m={\rho}V=\rho\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x^p}\Bigr)^{2}\pi\,dx,
$$

$$
dm=\frac{1}{x^{2p}}\pi\rho\,dx,
$$

$$
I=\int{r^{2}\frac{1}{x^{2p}}\pi\rho\,dx},
$$

$$
I=\int{x^{2}\frac{1}{x^{2p}}\pi\rho\,dx}=\boxed{\pi\rho\int_{1}^{\infty}{x^{2-2p}}\,dx.}
$$

Like what we did in section 3.2, we use the integral test in reverse. The integral will behave the same as

$$
\sum_{n=1}^{\infty}{n^{2-2p}}.
$$

We also know that for such a $p$-series

$$
\sum_{n=1}^{\infty}\frac{1}{n^p}=\sum_{n=1}^{\infty}{n^{-p}},
$$

the series converges when $p>1$. Therefore, for our series to converge,

$$
2-2p<-1\Longrightarrow\boxed{p>\frac{3}{2}.}
$$

How crazy is that! Recall the previous sections, as long as $p>1$, the solid would have a finite surface area and a finite volume. If we adjust $p$ such that $1<p<\frac{3}{2}$, we can theoretically build a structure that can withstand infinite torque with finite amount of material.

---

## Conclusion

At this point, we have successfully determined the condition under which a Gabriel’s-Horn-like solid would have a finite volume and surface area.

### Everything About the Family of Gabriel's Horn

To wrap it up, for any solid generated by rotating the graph of

$$
\frac{1}{x^{p}}
$$

for $x>1$, its volume would be finite when

$$
p>\frac{1}{2},
$$

as given by the integral

$$
V=\pi\int_{1}^{\infty}\!\!\Bigl(\frac{1}{x^{p}}\Bigr)^{2}\,dx.
$$

Its surface area would be finite when

$$
p>1,
$$

as given by the integral

$$
A=2\pi\int_{1}^{\infty}\Bigl(\frac{1}{x^{p}}\Bigr)
   \sqrt{1+p^{2}x^{-2p-2}}\,dx.
$$

Finally, its rotational inertia would be finite when

$$
p>\frac{3}{2},
$$

as given by the integral

$$
I=\pi\rho\int_{1}^{\infty}{x^{2-2p}}\,dx.
$$

### What Did I Learn

For this final project, I explored the characteristics of Gabriel's Horn as well as other Gabriel's Horn-like solids. In the process of deriving the volume, surface area, and rotational inertia, I applied many of the concepts I learned this year, including the disk method, arc length formula, implicit differentiation, interval of convergence for infinite series, and various convergence tests.

Gabriel's Horn illustrates the counterintuitive yet fascinating aspects of mathematics, calculus, and physics. This project not only helped me review what I learned this year but also strengthened my passion for studying STEM subjects in the future.

Furthermore, I initially wrote this document in Google Docs. However, I soon realized that the equation functionality in Google Docs lacked aesthetic quality. As a result, I took the opportunity to learn the basics of LaTex in order to present all the formulas and equations in a more elegant and fancy style.
