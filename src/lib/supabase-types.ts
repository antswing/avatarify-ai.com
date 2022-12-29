export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      photos: {
        Row: {
          id: number
          created_at: string | null
          uid: string
          name: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          uid: string
          name: string
        }
        Update: {
          id?: number
          created_at?: string | null
          uid?: string
          name?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      photos: {
        Row: {
          id: number
          created_at: string | null
          uid: string
          name: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          uid: string
          name: string
        }
        Update: {
          id?: number
          created_at?: string | null
          uid?: string
          name?: string
        }
      }
      user_info: {
        Row: {
          id: string
          created_at: string | null
          paid: boolean
        }
        Insert: {
          id: string
          created_at?: string | null
          paid?: boolean
        }
        Update: {
          id?: string
          created_at?: string | null
          paid?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      photos: {
        Row: {
          id: number
          created_at: string | null
          uid: string
          name: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          uid: string
          name: string
        }
        Update: {
          id?: number
          created_at?: string | null
          uid?: string
          name?: string
        }
      }
      user_info: {
        Row: {
          id: string
          created_at: string | null
          paid: boolean
        }
        Insert: {
          id: string
          created_at?: string | null
          paid?: boolean
        }
        Update: {
          id?: string
          created_at?: string | null
          paid?: boolean
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}