import { createClient } from '@supabase/supabase-js';
import {type Database} from "./databaseType";
import { BlogPost, Location, Lead } from '../utils/contentTypes';

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY! 
);


export async function getBlogPosts(): Promise<BlogPost[]> {
  const {data, error} = await supabase.from("BlogPosts").select();

  if (error) {
    console.error(`Error fetching blog posts: ${error}`);
    return [];
  }

  const blogPosts: BlogPost[] = data.map(post => {
    return {
      id: post.id,
      img: post.image_url,
      alt: post.image_alt,
      date: post.date_created,
      title: post.article_title,
      summary: post.article_summary
    }
  })

  return blogPosts;
}


export async function getLocations(): Promise<Location[]> {
  const {data, error} = await supabase.from("Locations").select();

  if (error) {
    console.error(`Error fetching locations: ${error}`);
    return [];
  }

  const locations: Location[] = data.map(location => {
    return {
        id: location.id,
        img: location.image_url,
        alt: location.img_alt,
        rating: location.rating,
        title: location.title,
        location: location.location,
        pricePerPerson: location.price_per_person

    }
  })

  return locations;
}

export async function insertLead(lead: Lead) {
  const { error } = await supabase.from("Lead").insert(
    [{ 
      created_at: lead.createdAt, 
      full_name: lead.fullName, 
      email_address: lead.emailAddress
    }]
  );

  if (error) {
    throw new Error(`Error when submitting lead data - Error Message: ${error.message}`)
  }

}

