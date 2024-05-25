from typing import List, Optional
from pydantic import BaseModel, Field

class Stats(BaseModel):
    strength: int = Field(..., ge=3, le=18)
    intelligence: int = Field(..., ge=3, le=18)
    dexterity: int = Field(..., ge=3, le=18)
    agility: int = Field(..., ge=3, le=18)
    luck: int = Field(..., ge=3, le=18)

class Character(BaseModel):
    name: str
    age: int
    attributes: List[str]
    personality: str
    stats: Stats
    background: str
    magic: Optional[str]

Output = List[Character]