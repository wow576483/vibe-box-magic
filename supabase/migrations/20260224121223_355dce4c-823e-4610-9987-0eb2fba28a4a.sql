
-- Create orders table
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT DEFAULT 'قسنطينة',
  address TEXT NOT NULL,
  box_type TEXT,
  quantity INTEGER DEFAULT 1,
  delivery_time TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public order form)
CREATE POLICY "Anyone can create orders"
ON public.orders
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view orders (for admin)
CREATE POLICY "Authenticated users can view orders"
ON public.orders
FOR SELECT
USING (auth.role() = 'authenticated');
