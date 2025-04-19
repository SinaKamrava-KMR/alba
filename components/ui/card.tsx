import React from "react";

   function cn(...classes: (string | undefined | false)[]) {
     return classes.filter(Boolean).join(' ');
   }
   
   /* ───── Card ───── */
   export const Card = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div
       ref={ref}
       className={cn(
         'rounded-lg border bg-white text-gray-800 shadow-sm',
         className
       )}
       {...props}
     />
   ));
   Card.displayName = 'Card';
   
   /* ───── Header ───── */
   export const CardHeader = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div ref={ref} className={cn('flex flex-col gap-1.5 p-6', className)} {...props} />
   ));
   CardHeader.displayName = 'CardHeader';
   
   /* ───── Title ───── */
   export const CardTitle = React.forwardRef<
     HTMLHeadingElement,
     React.HTMLAttributes<HTMLHeadingElement>
   >(({ className, ...props }, ref) => (
     <h3
       ref={ref}
       className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
       {...props}
     />
   ));
   CardTitle.displayName = 'CardTitle';
   
   /* ───── Description ───── */
   export const CardDescription = React.forwardRef<
     HTMLParagraphElement,
     React.HTMLAttributes<HTMLParagraphElement>
   >(({ className, ...props }, ref) => (
     <p ref={ref} className={cn('text-sm text-gray-500', className)} {...props} />
   ));
   CardDescription.displayName = 'CardDescription';
   
   /* ───── Content ───── */
   export const CardContent = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div ref={ref} className={cn('', className)} {...props} />
   ));
   CardContent.displayName = 'CardContent';
   
   /* ───── Footer ───── */
   export const CardFooter = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
   ));
   CardFooter.displayName = 'CardFooter';
   