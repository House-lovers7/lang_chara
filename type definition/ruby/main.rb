# @type var strength: Integer
# @type var intelligence: Integer
# @type var dexterity: Integer
# @type var agility: Integer
# @type var luck: Integer
Stats = Struct.new(:strength, :intelligence, :dexterity, :agility, :luck) do
  def validate
    strength.between?(3, 18) &&
      intelligence.between?(3, 18) &&
      dexterity.between?(3, 18) &&
      agility.between?(3, 18) &&
      luck.between?(3, 18)
  end
end

# @type var name: String
# @type var age: Integer
# @type var attributes: Array[String]
# @type var personality: String
# @type var stats: Stats
# @type var background: String
# @type var magic: String?
Character = Struct.new(:name, :age, :attributes, :personality, :stats, :background, :magic) do
  def validate
    !name.empty? &&
      age.is_a?(Integer) &&
      attributes.is_a?(Array) && attributes.all? { |attr| attr.is_a?(String) } &&
      !personality.empty? &&
      stats.validate &&
      !background.empty?
  end
end

# @type var Output: Array[Character]
Output = Array[Character]

def validate_output(output)
  output.is_a?(Array) && output.all?(&:validate)
end